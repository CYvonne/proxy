function FindProxyForURL(url, host) {
   ow = [
      "api.dida365.com", "dida365.com", ".api.dida365.com", ".dida365.com"
   ];
   for (i = 0; i < ow.length; i++) {
       if (dnsDomainIs(host, ow[i])) {
           return "PROXY 127.0.0.1:8899";
       }
   }
   return "DIRECT";
}
