import md5 from 'md5'

export const PRIVATE_KEY = 'YOUR PRIVATE KEY'
export const PUBLIC_KEY = 'YOUR PUBLIC KEY'
export const ts = Date.now();
export const cifrate = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
