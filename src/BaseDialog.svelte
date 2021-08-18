<svelte:options tag="base-dialog" />

<script>
  export let label;
</script>

<div class="dialog">{label}</div>

<style>
  .dialog {
    background: green;
  }
</style>
