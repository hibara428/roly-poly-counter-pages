<template>
  <section class="fixed-bottom d-flex bg-light border-top align-items-center">
    <div class="container-fluid">
      <div class="collapse" id="collapseBottomForm">
        <div class="mt-3 mb-2">
          <div class="row my-2">
            <div class="col-8 d-grid gap-2 mx-auto">
              <button
                type="button"
                class="btn btn-lg btn-block btn-primary"
                @click="countUpRolyPoly('south')"
              >
                南
              </button>
            </div>
          </div>
          <div class="row my-2">
            <div class="col d-grid gap-2 mx-auto">
              <button
                type="button"
                class="btn btn-lg btn-block btn-primary"
                @click="countUpRolyPoly('east')"
              >
                東
              </button>
            </div>
            <div class="col d-grid gap-2 mx-auto">
              <button
                type="button"
                class="btn btn-lg btn-block btn-primary"
                @click="countUpRolyPoly('west')"
              >
                西
              </button>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-8 d-grid gap-2 mx-auto">
              <button
                type="button"
                class="btn btn-lg btn-block btn-primary"
                @click="countUpRolyPoly('north')"
              >
                北
              </button>
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col d-grid gap-2">
            <div class="container-fluid px-0">
              <div class="row">
                <div class="col d-grid gap-2 mx-auto">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-success"
                    @click="countUpOthers('dog')"
                  >
                    犬
                  </button>
                </div>
                <div class="col d-grid gap-2 mx-auto">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-success"
                    @click="countUpOthers('cat')"
                  >
                    猫
                  </button>
                </div>
                <div class="col d-grid gap-2 mx-auto">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-success"
                    @click="countUpOthers('butterfly')"
                  >
                    蝶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <a
          class="btn btn-lg btn-secondary btn-block"
          data-toggle="collapse"
          href="#collapseBottomForm"
          role="button"
          aria-expanded="false"
          aria-controls="collapseBottomForm"
        >
          Show/Hide Controls
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Direction, OtherObjects } from '@/types'

// emits
const emits = defineEmits<{
  (event: 'count-up-roly-poly', direction: Direction): void
  (event: 'count-up-others', otherObject: OtherObjects): void
}>()
// methods
const countUpRolyPoly = (direction: Direction) => {
  emits('count-up-roly-poly', direction)
}
const countUpOthers = (otherObject: OtherObjects) => {
  emits('count-up-others', otherObject)
}
</script>
