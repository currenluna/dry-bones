<script lang="ts">
    import { onMount } from "svelte";
    import { csi, evalTS, subscribeBackgroundColor } from "../lib/utils/bolt";
    import { state, appInfo, helpDialog } from "./store";
    import { getState, initPrefs, saveState } from "./prefs";

    let textArea = "";

    let changing = false;
    // $: saveStatus = changing ? "Saving" : "Changes saved";
    let timeout: number | null;

    let backgroundColor: string = "#282c34";

    const testFunc = () => {
        evalTS("testFunc");
    };


    const parseText = () => {
        if (textArea.length === 0) {
            alertUser("Empty Text Editor");
        } else {
            evalTS("parseText", textArea);
        }
    }

    const alertUser = (message: string) => {
        evalTS("alertUser", message);
    }

    // Background color update
    onMount(() => {
        if (window.cep) {
            subscribeBackgroundColor((c: string) => (backgroundColor = c));
            initPrefs();
            
            // read from JSON file
            const existingState = getState();

            if (existingState) $state = existingState;
            
            state.subscribe((val) => {
                console.log("state changed", val);
                textArea = val.bones[0];
                // saveState(val);
            });
        }
    })

    // Called on text area change
    // -- should access the correct bone index to save the textArea value, once tabs are implemented
    const save = () => {
        changing = true;
        $state.bones[0] = textArea;
        saveState($state);
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = window.setTimeout(() => {
            console.log("here");
            changing = false;
        }, 2000);
    }
</script>

<div class="app" style="--background-color: {backgroundColor}">
    <p class="alert">Window too small.</p>
    <div class="container">
        <div class="header">
            <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg==">
            <h1>Dry Bones</h1>
        </div>
        <textarea class="text-editor" bind:value={textArea} on:keydown={save}></textarea>
        <div class="button-container">
            <button class="button-outline" on:click={initPrefs}>Load</button>
            <button class="button-solid" on:click={parseText}>Run</button>
        </div>
        <div class="credit">
            <a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone">Fish Bone</a> icon by <a href="https://icons8.com">Icons8</a>
        </div>
        <div class="save-status">
            {#if changing}
                <div class="status-changing">Saving changes</div>
            {:else}
                <div class="status-saved">Saved</div>
            {/if}
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
    .alert {
        display: none;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: stretch;
        gap: 4px;
        width: 80%;
        height: 80%;
    }
    .header {
        display: flex;
    }
    .logo {
        width: 30px;
        filter: invert(1);
        align-self: center;
    }
    h1 {
        margin: .5rem;
        font-size: 1.8rem;
        display: inline;
    }
    .text-editor {
        resize: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 1rem;
        flex: 1;
    }
    .button-container {
        display: flex;
        gap: 4px;
        height: 40px;
    }
    button {
        padding: .5rem;
        border: none;
        margin: 0;
        flex: 1;
    }
    .button-solid {
        background-color: white;
        flex: 1 1 33%;
        border-bottom-right-radius: 5px;
    }
    .button-outline {
        color: white;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid white;
        border-bottom-left-radius: 5px;
        flex: 1 1 33%;
    }
    button:hover {
        cursor: pointer;
    }
    a {
        color: white;
        white-space: nowrap;
    }
    @media screen and (max-width: 180px ), screen and (max-height: 180px) {
        .alert {
            display: block;
        }
        .container {
            display: none;
        }
        button {
            width: 80%;
            height: 80%;
            max-height: 100px;
        }
    }
</style>
