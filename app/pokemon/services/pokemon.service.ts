import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/observable/of";
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Pokemon } from "./pokemon.model";
import { environment } from '../../environments/environment';
import { Filters } from "./pokemon.actions";


@Injectable()
export class PokemonService {
  static headers =  new Headers({"Content-Type": "application/json"});
  constructor(private http: Http) { }

  // http://pokeapi.co/api/v2/evolution-chain/?offset=2&limit=10
  list(filters: Filters = {offset: 0, limit: 8}): Observable<{items: [Pokemon], meta: {count: number}}> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('offset', filters.offset.toString());
    params.set('limit', filters.limit.toString());
    return this.http.get(environment.POKE_BASE_URL + 'pokedex/2/', {
      headers: PokemonService.headers,
      search: params
    })
      .map(res => this.toJSON(res))
      .map(data => data.pokemon_entries)
      .map(entries => {
        let allPokemon = [];
        entries.forEach((entry) => {
          let pokemon = new Pokemon();
          pokemon.name = entry.pokemon_species.name;
          pokemon.id = entry.entry_number;
          allPokemon.push(pokemon);
        });
        // return { items: allPokemon, meta: {count: allPokemon.length}};
        // Fake paging
        return { items: allPokemon.slice(filters.offset, filters.offset + filters.limit), meta: {count: allPokemon.length}};
      })
      .catch(this.handleError);
  }


  pollList(filters: Filters): Observable<{items: [Pokemon], meta: {count: number}}>  {
    return this.list(filters)
      .concat(Observable.interval(60000).switchMap(() => this.list(filters)))
      .share();
  }

  get(id: number): Observable<Pokemon> {
    return this.http.get(`${environment.POKE_BASE_URL}pokemon/${id}/`, {headers: PokemonService.headers})
      .map(res => this.toJSON(res))
      .map(data => {
        let pokemon = new Pokemon();
        pokemon.name = data.name;
        pokemon.id = data.id;
        data.types.forEach((eachType) => {
          pokemon.types.push(eachType.type.name);
        });
        data.stats.forEach((eachStat) => {
          pokemon.stats.push({
            name: eachStat.stat.name,
            value: eachStat.base_stat
          });
        });
        return pokemon;
    })
    .catch(this.handleError);
  }

  private toJSON(response: Response) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Bad response status: ' + response.status);
    }
    return response.json();
  }

  private handleError(errorResponse: Response) {
    let body = errorResponse.json();
    let message = body.message ? body.message : (errorResponse.statusText || 'unknown error');
    return Observable.throw(message);
  }

}
