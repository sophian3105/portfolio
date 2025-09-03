import '../styles/globals.css';
// import { Footer } from '../components/footer';
// import { Header } from '../components/header';

// export const metadata = {
//     title: {
//         template: '%s | Netlify',
//         default: 'Netlify Starter'
//     }
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-black">
                <div className="min-h-screen bg-black text-zinc-50">
                    <div className="min-h-screen bg-black text-zinc-50">
                        <main className="grow">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
