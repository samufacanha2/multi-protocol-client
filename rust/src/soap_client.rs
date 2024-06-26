use reqwest::Client;
use std::time::Instant;

const BASE_URL: &str = "http://localhost:5001/soap";

const SOAP_ACTIONS: &[(&str, &str)] = &[
    (
        "Usuarios",
        r#"<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                       <soapenv:Header/>
                       <soapenv:Body>
                         <spy:ler_usuarios/>
                       </soapenv:Body>
                     </soapenv:Envelope>"#,
    ),
    (
        "Musicas",
        r#"<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                      <soapenv:Header/>
                      <soapenv:Body>
                        <spy:ler_musicas/>
                      </soapenv:Body>
                    </soapenv:Envelope>"#,
    ),
    (
        "Playlists",
        r#"<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                        <soapenv:Header/>
                        <soapenv:Body>
                          <spy:ler_playlists/>
                        </soapenv:Body>
                      </soapenv:Envelope>"#,
    ),
];

pub async fn run_tests() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let test_counts = vec![100, 200, 300];

    for &count in &test_counts {
        println!("{} requests:", count);
        for &(name, action) in SOAP_ACTIONS {
            let start = Instant::now();
            for _ in 0..count {
                let res = client
                    .post(BASE_URL)
                    .header("Content-Type", "text/xml")
                    .body(action)
                    .send()
                    .await;
                if let Err(err) = res {
                    eprintln!("Request failed: {:?}", err);
                }
            }
            let duration = start.elapsed();
            println!("{} : {:.6?} seconds", name, duration.as_secs_f64());
        }
    }

    Ok(())
}
