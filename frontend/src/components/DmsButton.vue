<template>
    <button name="dms-button"
            :disabled="disabled"
            @click.prevent="emitClickIfNotDisable()"
            :class="buttonClass">
        <slot></slot>
    </button>
</template>