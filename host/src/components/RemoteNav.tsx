import { type Component, createSignal, createEffect } from 'solid-js';
import { renderToStaticMarkup } from 'react-dom/server';

export { RemoteNav }

const RemoteNav: Component = () => {
    const [navMarkup, setNavMarkup] = createSignal('<div>ssr placeholder</div>');
    
    createEffect(() => {
        import('remoteApp/Nav').then((res) => {
            setNavMarkup(renderToStaticMarkup(res.default()))
        })
    })

    return <div innerHTML={navMarkup()}></div>
}
