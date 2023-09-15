<script lang="ts">
    import { onMount } from "svelte";
    import { evalTS, subscribeBackgroundColor } from "../lib/utils/bolt";

    let text_path = "";
    let bins = [{path: "01 Cuts"}, {path: "01 Cuts/00 Nests"}, {path: "01 Cuts/01 Raw"}];

    let backgroundColor: string = "#282c34";

    const createFolderStructure = () => evalTS("createFolderStructure");

    // Append item to list on [Enter] key press
    const onEnterDown = (e: KeyboardEvent) => {
        if (e.code === "Enter" && text_path.length > 0) {
            bins = [...bins, {path: text_path}]
            text_path = "";
        }
    }

    // Remove item from list
    const deleteItem = (index: number) => {
        bins.splice(index, 1);
        bins = bins;
    }

    // Background color update
    onMount(() => {
        if (window.cep) {
            subscribeBackgroundColor((c: string) => (backgroundColor = c))
        }
    })
</script>

<div class="app" style="--background-color: {backgroundColor}">
    <div class="container">
        <h1>Dry Bones</h1>
        <div class="list">
            {#each bins as item, index}
                <div class="list-item">
                    <span>{item.path}</span>
                    <button class="delete-item" on:click={() => deleteItem(index)}>X</button>
                </div>
            {/each}
        </div>
        <div class="inputs-container">
            <input
                bind:value={text_path}
                on:keydown={onEnterDown}
                type="text"
                placeholder="Add a bin path, then hit enter"
            >
            <div class="button-container">
                <button class="solid">Run</button>
                <button class="outline">Save</button>
                <button class="preset-1">1</button>
                <button class="preset-2">2</button>
                <button class="preset-3">3</button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    $border-radius: 5px;

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
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        gap: 4px;
        width: 80%;
    }
    h1 {
        margin: .5rem;
        font-size: 1.8rem;
    }
    .list {
        width: 100%;
        height: 100px;
        overflow-y: scroll;
        scroll-behavior: auto;
        background-color: white;
        border-radius: $border-radius;
    }
    .list-item {
        color: black;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: .5rem;
    }
    .inputs-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .button-container {
        display: flex;
        gap: 7px;
    }
    button {
        background-color: white;
        padding: .5rem;
        border-radius: 0;
        border: none;
        margin: 0;
        transition: all ease .5s;
    }
    button:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 180px ), screen and (max-height: 180px) {
        h1 {
            display: none;
        }
        button {
            width: 80%;
            height: 80%;
            max-height: 100px;
        }
    }
</style>
