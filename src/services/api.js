/* eslint class-methods-use-this: 0 */
import http from './http';

export default class Service {
  getAll(offset) {
    return http.get(`/characters?limit=20&offset=${offset}`).then((resp) => resp.data);
  }
  getByName(name) {
    return http.get(`/characters?nameStartsWith=${name}`).then((resp) => resp.data);
  }
  getHeroe(id) {
    return http.get(`/characters/${id}`).then((resp) => resp.data);
  }
}
