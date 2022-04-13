import md5 from 'md5'

export const PRIVATE_KEY = '70e28d8ebefea279f046dff41e1d1a1d7b5d631c'
export const PUBLIC_KEY = 'c22fa726fa98df1bfcd6629ca6add564'
export const ts = Date.now();
export const cifrate = md5(ts + PRIVATE_KEY + PUBLIC_KEY);