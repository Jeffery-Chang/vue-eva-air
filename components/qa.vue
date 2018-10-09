<template>
    <div class="QA">
        <div class="main">
            <h2>{{ $t('QA_H1') }}</h2>
            <div class="sub">{{ $t('QA_H2') }}</div>
            <div class="content">
                <ul>
                    <li v-for="(item, $index) in qaList" :key="$index" @click.prevent="toggleSlide($index);" :class="{ 'active': item.isOpen }">
                        <a class="qabox">
                            <div class="question">{{ item.question }}
                                <div class="plus_btn">
                                    <div class="btn_box"> 
                                        <div class="plus-minus-toggle" :class="{ 'collapsed': !item.isOpen }"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="answer" v-if="typeof item.answer == 'string'" v-show-slide:500:ease-in-out="item.isOpen" v-html="item.answer"></div>
                            <div class="answer col-2" v-else v-show-slide:500="item.isOpen" v-for="(item2, $index) in item.answer" :key="$index" v-html="item2"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                qaList: [{
                        question: this.$t('QA_01_Q'),
                        answer: this.$t('QA_01_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_02_Q'),
                        answer: [
                            this.$t('QA_02_A_1'),
                            this.$t('QA_02_A_2'),
                        ],
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_03_Q'),
                        answer: this.$t('QA_03_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_04_Q'),
                        answer: this.$t('QA_04_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_05_Q'),
                        answer: this.$t('QA_05_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_06_Q'),
                        answer: this.$t('QA_06_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_07_Q'),
                        answer: this.$t('QA_07_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_08_Q'),
                        answer: this.$t('QA_08_A'),
                        isOpen: false,
                    },
                    {
                        question: this.$t('QA_09_Q'),
                        answer: this.$t('QA_09_A'),
                        isOpen: false,
                    },
                ]
            }
        },
        mounted() {

        },
        methods: {
            toggleSlide(index) {
                if (this.qaList[index].isOpen) {
                    this.qaList[index].isOpen = false;
                    return;
                }

                this.qaList.forEach((obj) => {
                    obj.isOpen = false;
                });

                this.qaList[index].isOpen = true;
            }
        }
    }

</script>

<style>


</style>
