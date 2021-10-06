import * as contentful from 'contentful';

export const client = contentful.createClient({
    
    // space: process.env.SPACEID,
    space: "8cxgkgbbigy2", 
    accessToken: 'd8jFqvt0jB3yYHoNNC7vxSsyaqwtsmChV2c6mzrIE2w'
  });