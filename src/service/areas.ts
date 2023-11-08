import { API_PREFIX_PERSON } from '../constants';
import CallApi from './api';

export const getRegions = () =>
  CallApi({
    url: API_PREFIX_PERSON + `Areas/Regions`,
    method: 'get',
  });

export const getMunicipalities = (regionId: string) =>
  CallApi({
    url: API_PREFIX_PERSON + `Areas/Municipalities`,
    method: 'get',
    params: { regionId: regionId },
  });

