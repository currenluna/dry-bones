<script lang="ts">
    import { onMount } from "svelte";
    import { evalTS, subscribeBackgroundColor } from "../lib/utils/bolt";
    import { create } from 'domain';

    let backgroundColor: string = "#282c34";

    const createFolderStructure = () => evalTS("createFolderStructure");

    onMount(() => {
        if (window.cep) {
            subscribeBackgroundColor((c: string) => (backgroundColor = c))
        }
    })
</script>

<div class="app" style="--background-color: {backgroundColor}">
    <h1>Dry Bones</h1>
    <p>Press the button to add structure to your <span style="text-decoration: line-through;">body</span> project.</p>
    <button on:click={createFolderStructure}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="bone">
            <path d="M27.67,7.87a3.48,3.48,0,0,0-2.47-1h0a3.49,3.49,0,1,0-6.29,2l-10,10a3.51,3.51,0,0,0-2.1-.7,3.46,3.46,0,0,0-2.46,1,3.5,3.5,0,0,0,2.47,6h0a3.49,3.49,0,1,0,6.29-2l10-10a3.51,3.51,0,0,0,2.1.7,3.46,3.46,0,0,0,2.46-1A3.5,3.5,0,0,0,27.67,7.87Z"></path>
        </svg>
    </button>
</div>

<style>
    .app {
        background-color: var(--background-color);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
    }
    h1 {
        margin: .5rem;
        font-size: 1.8rem;
    }
    p {
        margin: .5rem;
        max-width: 200px;
        text-align: center;
    }
    button {
        background-color: white;
        margin: 1rem;
        padding: .5rem;
        border-radius: 1.8rem;
        border: none;
        text-transform: uppercase;
        transition: all ease .5s;
        width: 150px;
    }
    button:hover {
        background-color: rgb(248, 255, 116);
        color: black;
        cursor: pointer;
    }
    svg {
        width: 32px;
    }
    @media screen and (max-width: 180px ), screen and (max-height: 180px) {
        h1 {
            display: none;
        }
        p {
            display: none;
        }
        button {
            width: 80%;
            height: 80%;
            max-height: 100px;
        }
        svg {
            width: 35px;
        }
    }
</style>
