#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
    // tauri::Builder::default()
    //     .setup(|app| {
    //         WindowBuilder::new(
    //             app,
    //             "main-window".to_string(),
    //             tauri::WindowUrl::App("index.html".into()),
    //         )
    //             .title("Discord Webhook Sender")
    //             .build()?;
    //         Ok(())
    //     })
    //     .invoke_handler(tauri::generate_handler![greet])
    //     // .invoke_handler(tauri::generate_handler![new_window])
    //     .run(tauri::generate_context!())
    //     .expect("error while running tauri application");
}
