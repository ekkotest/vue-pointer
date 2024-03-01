<template>
    <div class="flex flex-column">
        <div class="flex">
            <div>
                <img class="v_poninter_scale" src="/img/mountain.jpg" />
            </div>
            <div class="v_poninter_scale VPButton ">抖动效果</div>
        </div>

        <div class="flex">
            <div v-pointer.ripple>
                <img src="/img/mountain.jpg" />
            </div>
            <div v-pointer.ripple class="VPButton">涟漪效果</div>
        </div>
        <div class="flex">
            <div v-pointer.wave> <img src="/img/mountain.jpg" /></div>
            <div v-pointer.wave class="VPButton wave">波纹效果</div>
        </div>
    </div>
</template>

<script setup></script>