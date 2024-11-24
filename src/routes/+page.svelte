<script lang="ts">
    import { getState, type GroupState } from "$lib/api";
    import { onMount } from "svelte";

    let states: GroupState[] | null = null;
    let previousStates: GroupState[] | null = null;
    let isFetching = false;

    function fetchData() {
        if (isFetching) {
            return;
        }

        isFetching = true;
        getState().then((data) => {
            isFetching = false;
            previousStates = states;
            states = data;
        });
    }

    onMount(() => {
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    });
</script>

<h1 class="text-2xl p-4">Live stat</h1>

{#if states === null}
    <p>Loading...</p>
{:else}
    <div class="p-4 grid grid-cols-2 gap-3">
        {#each states as state}
            <div class="p-3 border rounded-md">
                <h3 class="font-bold">
                    {state.data.title}
                </h3>
                <p>
                    {state.data.desc}
                </p>
                <p class="text-blue-500">
                    {state.data.total}
                </p>
            </div>
        {/each}
    </div>
{/if}
