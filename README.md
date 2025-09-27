
# React + TypeScript + Vite

  

untuk run

`npm run dev`

untuk test

`npm run test`

  

versi deployed bisa diakses di:

https://keda-tech-test-c0z1whzby-satyowicaksanas-projects.vercel.app/

  

Tech stacks dan alasan:

  

-   **Vite:** Dipilih karena sebagai build tool modern, Vite sangat cepat dalam development dan mendukung Hot Module Replacement, sehingga perubahan di React langsung terlihat tanpa reload penuh, mempercepat iterasi UI.
    
-   **React:** Digunakan karena arsitektur berbasis komponen memudahkan membuat UI interaktif seperti navbar, drawer, modal, dan form input, sehingga kode lebih modular dan mudah diuji.
    
-   **Ant Design (antd):** Dipilih karena menyediakan komponen siap pakai yang profesional dan responsif, seperti `Row`, `Col`, `Drawer`, `Modal`, dan `Button`, sehingga mempercepat pengembangan tanpa perlu membuat styling custom dari awal.
    
-   **Vitest:** Digunakan untuk unit testing karena integrasinya seamless dengan Vite, memungkinkan pengujian komponen React dan fungsi logika (misal: sorting atau sum even) dengan cepat dan ringan.
    
-   **TypeScript:** Dipilih untuk menambahkan tipe statis, sehingga setiap state, props, dan input/output fungsi lebih terkontrol, mengurangi bug runtime, dan memudahkan developer lain memahami struktur data proyek.