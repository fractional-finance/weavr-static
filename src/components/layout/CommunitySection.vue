<template>
  <div class="pt-8 pb-48" ref="community">
    <div class="relative w-full">
      <div 
        class="
        absolute
        object-cover object-center opacity-50
        w-full h-full community-bg
        "
      >
      </div>
      <div class="w-5/6 md:w-full max-w-screen-lg mx-auto px-8 lg:px-4">
        <div class="relative flex flex-col items-center">
          <div class="container mx-auto mb-48">
            <div class="
            text-white text-center text-shadow-lg font-bold text-3xl md:text-5xl
            ">
              Game-changing Benefits
            </div>
            <div class="mx-auto font-medium text-center text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8 pb-16 md:pb-24">
              Be in control of your investment 24/7.
            </div>
            <BenefitCardLayout :benefits="benefits"/>
          </div>
          <div class="
          flex flex-col md:flex-row-reverse items-between max-w-screen-lg
          ">
            <div class="
            flex flex-col items-start w-full md:w-2/3 md:pl-16
            ">
              <div class="
              text-shadow-sm font-bold text-2xl md:text-4xl
              text-high-emphasis
              ">
                As the owner of your investment, your voice counts.
              </div>
              <div class="
              font-medium text-shadow-sm 
              text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8 mb-8
              ">
                <p class="pb-8">
                  Each asset is governed by a DAO, a voting mechanism that allows you to trigger and vote on actions that will directly impact your property.
                </p>
                <p>
                  Communication channels are direct between co-owners, property managers, and renters for real-time needs.
                </p>
              </div>
            </div>
            <div class="h-full w-full md:w-1/3 mx-auto">
              <div class="flow-root">
                <ul class="-mb-8">
                  <li v-for="(activityItem, activityItemIdx) in examples.dao.activityItems" :key="activityItem.id">
                    <div class="relative pb-8">
                      <span v-if="(activityItemIdx !== examples.dao.activityItems.length - 1)" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      <div class="relative flex items-start space-x-3">
                        <template v-if="activityItem.type === 'voting'">
                          <div class="relative">
                            <div>
                              <div class="flex flex-col items-end -space-y-4 px-1 relative z-0 overflow-visible">
                                <div v-for="url in activityItem.actorsAvatarURLs" :key="url">
                                  <img class="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="url" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="min-w-0 flex-1">
                            <div>
                              <div class="text-lg">
                                <div class="font-medium text-gray-300">{{ activityItem.title }}</div>
                              </div>
                            </div>
                            <div class="mt-2 text-md text-gray-500 w-2/3">
                              <p>
                                {{ activityItem.subtitle }}
                              </p>
                            </div>
                          </div>
                        </template>
                        <template v-else-if="activityItem.type === 'proxy'" condition="activityItem.type === 'proxy'">
                          <div>
                            <div class="relative px-1">
                              <img class="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="activityItem.actorAvatarURL" alt="" />
                            </div>
                          </div>
                          <div class="min-w-0 flex-1">
                            <div>
                              <div class="text-lg">
                                <div class="font-medium text-gray-300">{{ activityItem.title }}</div>
                              </div>
                            </div>
                            <div class="mt-2 text-md text-gray-500 w-2/3">
                              <p>
                                {{ activityItem.subtitle }}
                              </p>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as ObjectDB from "../../data/mock/objects"
import BenefitCardLayout from "../features/Benefits/BenefitCardLayout"

export default {
  name: 'CommunitySection',
  components: {
    BenefitCardLayout,
  },
  data() {
    return {
      benefits: [],
      examples: {
        dao: {
          activityItems: [
            {
              id: 0,
              type: 'voting',
              actorsAvatarURLs: [
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAABXUlEQVR4Ae2auw0CMRBEfScSqIAqiEkpgpQMCZFcLSQIiYyUDkiJqADRCGRABzPBytJ5Z0jHv5191q1tuudy/ivg178vQC1ld55C/bT9QJ2J0fG/sw2cooeqgGgDBJIMQzQB0B4B0QQIJBmGONkfrrDB2EVWJ5SC4/MWGHuGa6/PBNR2eOzjm4CxZ6j2+uQJ6Nh9AKsTouf9aIZZHXAc1nAKeQJsAORDQDQBAkmGIZoAaI+A2K0ed/guQL+jwXcD5jGrM9i9P6tjvAVYBrLrJiB7hll8JoA5lF2XJ6B7LW6wDjAByR2Q3wI2IDnhNDwTQC1K3kCeAHofED2Ps/8ZMsDYeZ+Nz94N5AmwAQzB7LoJyJ5hFp8JYA5l1ye1A2TfYTb/cWAtYrq3QMy/9nubgPZzGIvABMT8a7+3PAHhOoCdx6OMVB8/usDW+8tvARvQOsLR9ZuAqIOt95cn4A/JEDbIrwcYzwAAAABJRU5ErkJggg==',
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAABZUlEQVR4Ae2bsW0DMRAEn8a3IRVgAS7BjThRqMBKFMlNOLATh27EHSgy4AbkQqQOdgKCOOJula6evNsdgv/Ef3v5udwW8dv8nYS6LO3rSeqjxdvhV07xv3uX+oNUC4g2oEDIskUTIO0pIJqAAiHLFtvb46u8D6B9Vo4+gUj3KV4CE4QUWoIJCLV/gslNwAQhhJZQnoBG5wHb43dXQr33EbSPU3HXz738S3kCbIDko4BoAgqELFs0AdKeAuJK+zzto3T9aA976/MSGJ3Q7OObgNkTGl2fCRjt8Ozjlydg7X1ep32Y3i8gQmh8up76K0+ADSCEsusmIHvC1J8JIIey6ys12LuP957rbw76PUWqn3QvAXIou24CsidM/ZkAcii7Xp6A4e8HRBNE5wnlCbAB0YhGz28CohOInt8ERCcQPX87fzzL7wWowN7nfRqfdDr3p+u9BMih7LoJyJ4w9WcCyKHsenkC7kICNk1AGQx7AAAAAElFTkSuQmCC',
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAABVklEQVR4Ae2bsQ0CMRAEefQlECAKoAwaQSQ0QAY1PBkZEcVQAgEBBSACOiCADjzB6YR/vaT7Pnx7Y9m+h269uX8ngc/hci2O3u2XRZ3E0/FRfGTYroo6iVN6QF23AeoVpvxMADmkrpsA9QpTft3tcy6eA2gfX7znxe94zl5FncRofDpHeAlQBdR1E6BeYcrPBJBD6nrzBHTRfgARQv0CGh+971P85gmwAYSIum4C1CtM+ZkAckhd7ylBus/TfTu6j9M5Itqv8BIgAtR1E6BeYcrPBJBD6nrzBKT3A2onqHkCbEDtiGbPzwRkO1x7fBNQe4Wy59f/+74fTTDaL/ASiFZg7ONNwNgrGJ2/CYg6OPbxzRMQ7gfQPpxNSPS9Q/ME2IBsRGuPbwJqr1D2/ExAtsO1xw//PoASjO7TdM6gfgb938BLgCqorpsA9QpTfiaAHFLXmyfgB8JvO95kCu6RAAAAAElFTkSuQmCC',
              ],
              title: '78% voted YES',
              subtitle: 'Should we change the on-site security provider?'
            },
            {
              id: 1,
              type: 'proxy',
              actorAvatarURL: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
              title: 'Property Manager',
              subtitle: 'Started looking for new candidates.'
            }
          ]
        }
      }
    }
  },
  mounted() {
    ObjectDB.getAll(ObjectDB.Types.UserBenefits)
      .then((benefits) => { 
        console.log(benefits)

        const flatBenefits = [
            benefits['listers'],
            benefits['buyers'],
        ]

        this.benefits = flatBenefits
      })
  },
}
</script>

<style scoped>
.community-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='440' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='769' cy='229' r='21'/%3E%3Ccircle cx='539' cy='269' r='21'/%3E%3Ccircle cx='603' cy='493' r='21'/%3E%3Ccircle cx='731' cy='737' r='21'/%3E%3Ccircle cx='520' cy='660' r='21'/%3E%3Ccircle cx='309' cy='538' r='21'/%3E%3Ccircle cx='295' cy='764' r='21'/%3E%3Ccircle cx='40' cy='599' r='21'/%3E%3Ccircle cx='102' cy='382' r='21'/%3E%3Ccircle cx='127' cy='80' r='21'/%3E%3Ccircle cx='370' cy='105' r='21'/%3E%3Ccircle cx='578' cy='42' r='21'/%3E%3Ccircle cx='237' cy='261' r='21'/%3E%3Ccircle cx='390' cy='382' r='21'/%3E%3C/g%3E%3C/svg%3E");
  mask-image: 
    radial-gradient(at 80% 60%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 50% 70%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 25%),
    radial-gradient(at 20% 80%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%)
    ;
}
</style>