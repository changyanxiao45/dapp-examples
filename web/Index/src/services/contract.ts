import request from '@/utils/request';

export async function queryContracts(): Promise<any> {
  return request('/api/getContracts');
}

export async function querySol(name: string): Promise<any> {
  return request(`/api/getSol?name=${name}`);
}

export async function getAbiBin(name: string): Promise<any> {
  return request(`/api/compileContract?name=${name}`);
}
