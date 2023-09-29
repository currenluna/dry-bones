<script lang="ts">
    import { onMount } from "svelte";
    import { evalTS, subscribeBackgroundColor } from "../lib/utils/bolt";

    let text_area = "Test\n/01 Cuts\n//00 Nests";
    let text_lines = text_area.split("\n");

    let root: object;

    let backgroundColor: string = "#282c34";
    
    const createBin = (name: string) => evalTS("createBin", name);
    
    const testFunc = () => {
        evalTS("testFunc", "000f4253");
    };


    const getRootItem = async () => {
        root = await evalTS("getRootItem");
    }

    // const getAllItemInfo = async () => {
    //     const names = await evalTS("getAllItemInfo");
    // }

    // Count the number of characters prefixing a line in the editor
    // Thanks, StackOverflow
    const countConsecutivePrefixChars = (str: string, char: string) => {
        let count = 0;
        if (str[0] === char) {
            count++;
        } else {
            return count;
        }
        let prevChar = str[0];
        for (let i = 1; i < str.length; i++) {
            if (str[i] === prevChar) {
                count++;
            } else {
                break;
            }
            prevChar = str[i];
        }
        return count; 
    };

    const alertUser = (message: string) => {
        evalTS("alertUser", message);
    };

    // Read each line from text editor and create bin for each line

    // create a stack with objects {id, # slashes, pathname}
    // iterate over each line
    // make sure the first readable line isn't a "/"
    // if first char is not "/", clear stack and add incoming lines to stack
    // if first char is a "/", and # slashes is one more than one of the stack objects, find the most recent objects with one less slash and create the folder within that folder
    // if first char is a "/", and the diff in # slashes between current line and last line is greater than 1, throw an error
    // if first char is a "#", skip over the line

    const parseSingleLine = (line: string) => {
        line = line.trim();
        const numSlashes: number = countConsecutivePrefixChars(line, "/");

        // Ignore Comment Lines
        if (line[0] === "#") {
            console.log("Comment");
        } else if (line[0] !== "/") {
            createBin(line);
        } else {
            // Create a folder starting after slashes
            createBin(line.substring(numSlashes));
        }
        
        // console.log(countConsecutivePrefixChars(line, "/"));
        // evalTS("createSubBin", line);
    }

    const readLines = () => {
        // let currentTree = new Array();
        if (text_area.length === 0) {
            alertUser("Empty Text Editor");
        } else {
            // Iterate over array of lines
            text_lines = text_area.split("\n");
            for (let i = 0; i < text_lines.length; i++) {
                const line = text_lines[i];
                parseSingleLine(line);
            }

        }
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
        <div class="header">
            <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg==">
            <h1>Dry Bones</h1>
        </div>
        <textarea rows="10" class="text-editor" bind:value={text_area}></textarea>
        <div class="button-container">
            <button class="button-solid" on:click={readLines}>Run</button>
            <!-- <button class="button-outline" on:click={testFunc}>Save</button> -->
            <button class="button-preset-1" on:click={testFunc}>1</button>
            <button class="button-preset-2">2</button>
            <button class="button-preset-3">3</button>
        </div>
        <div class="credit">
            <a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone">Fish Bone</a> icon by <a href="https://icons8.com">Icons8</a>
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
        justify-content: space-around;
        align-items: stretch;
        gap: 4px;
        width: 80%;
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
        border-bottom-left-radius: 5px;
    }
    .button-outline {
        color: white;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid white;
        flex: 1 1 33%;
    }
    .button-preset-1 {
        background-color: white;
        flex: 1 1 auto;
    }
    .button-preset-2 {
        background-color: white;
        flex: 1 1 auto;
    }
    .button-preset-3 {
        background-color: white;
        flex: 1 1 auto;
        border-bottom-right-radius: 5px;
    }
    button:hover {
        cursor: pointer;
    }
    a {
        color: white;
        white-space: nowrap;
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
