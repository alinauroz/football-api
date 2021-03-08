import request from './request';
import {find} from 'lodash'
let teams = [];

(async () => {
    let res = await request('teams');
    if (res.status === 'success')
        teams = res.data;
})();

export default getTeams = (query) => {

}

export const getTeamById = (id) => {
    return find(teams, {_id: id});
}