import type { Component } from 'solid-js'

import './index.css';
import { TVGuide } from '../../src/components/TVGuide';
import { RemoteNav } from '../../src/components/RemoteNav';

const Page: Component = () => {
  return (
    <section class='solidjs'>
      <code>⚡️ SolidJS</code>

      <section class='react'>
        <code>☢ React</code>
        <RemoteNav />
      </section>

      <TVGuide />
    </section>
  )
}

export { Page }
