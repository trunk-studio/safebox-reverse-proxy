var proxy = new require('redbird')({
    port: 8080,
    xfwd: false,
    ssl: {
        port: 8443,
        key: "dev-key.pem",
        cert: "dev-cert.pem",
    }
});

// Subdomains, paths, everything just works as expected
proxy.register("localhost/safebox", "http://localhost:9090/safebox");
proxy.register("localhost/sbx_svr", "http://localhost:80/sbx_svr");
