<template>
    <header class="page--header mint flex flex-col justify-center items-center">
    <div class="container flex flex-col justify-center ">
      <h4>Create your NFT Ticket(s)</h4>
      <div class="text-sm breadcrumbs">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Mint Tickets</li>
        </ul>
      </div>
    </div>
  </header>
    <main>
      <section class="home--body flex justify-center">
        <div class="cto--container max-w-screen-xl w-full px-4 min-h-screen">
          <FormKit type="group" v-model="mintForm" id="myForm">
            <div class="bg-base-100/40 backdrop-blur min-h-screen my-5 rounded-2xl py-16 px-14">
              <div class="mb-12">
                <FormKit
                    type="select"
                    label="Select Store"
                    name="selectedStore"
                    validation="required"
                    :options="stores"
                />
              </div>
              <h3 class="mb-4 font-bold">Event banner</h3>
              <p class="">This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 350 recommended</p>
              <div>
                <FormKit
                    type="file"
                    name="banner"
                    :classes="{
                    outer: 'file--input',
                    inner: {
                      $reset: true,
                      'file--input': true
                      }
                    }"
                    accept=".png,.jpg,,jpeg.svg"
                    validation-label="Event Banner"
                    validation="required"
                    validation-visibility="blur"
                >
                  <template #noFiles>
                    <div class="image--uploader">
                      <p class="form--info">
                        PNG,JPG,JPEG,SVG, (Max-50mb)
                      </p>
                      <nif-btn class="normal-case">
                        <i class="isax isax-export mr-2" /> Upload a file
                      </nif-btn>
                    </div>
                  </template>
                </FormKit>
              </div>
              <div class="mt-12">
                <FormKit
                    type="text"
                    name="ticketName"
                    label="Ticket Name"
                    validation="required"
                    validation-visibility="blur"
                    placeholder="Vue Conf 2023"
                />
              </div>
              <div class="grid ticket--image">
                  <div class="mt-5">
                    <h3>Ticket Video or Flyer</h3>
                    <p>This image or Video will serve as a means of attractions. for user to buy the ticket. as the dimensions change on different devices. 1080 x 1080 recommended.</p>
                  </div>
                <div>
                  <FormKit
                      type="file"
                      name="ticketMedia"
                      :classes="{
                    outer: 'file--input',
                    inner: {
                      $reset: true,
                      'file--input': true
                      }
                    }"
                      accept=".png,.jpg,,jpeg.svg"
                      validation-label="Ticket Video or Flyer"
                      validation="required"
                      validation-visibility="blur"
                  >
                    <template #noFiles>
                      <div class="image--uploader">
                        <p class="form--info">
                          PNG,JPG,JPEG,SVG, (Max-50mb)
                        </p>
                        <nif-btn class="normal-case">
                          <i class="isax isax-export mr-2" /> Upload a file
                        </nif-btn>
                      </div>
                    </template>
                  </FormKit>
                </div>
              </div>
              <div class="mt-12">
                <FormKit
                    type="textarea"
                    label="Ticket Description"
                    name="description"
                    rows="10"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa cumque doloremque doloribus ea esse nihil numquam quam quas qui quibusdam repellendus, temporibus voluptate! Cum excepturi expedita non quo ullam."
                    validation="required"
                    validation-visibility="blur"
                />
              </div>
              <div class="mt-12">
                <FormKit
                    type="select"
                    label="Select Event Category"
                    name="eventCategory"
                    validation="required"
                    :options="[
                      'Technology Submit',
                      'Music',
                      'Party House',
                      'Business',
                      'Summer Catch-Up',
                      'Excursion',
                    ]"
                />
              </div>
              <div class="tickets--grid">
                <div class="radios">
                  <FormKit
                      name="priceCategory"
                      type="radio"
                      validation="required"
                      label="Select Price Category"
                      :options="['SINGLE', 'COUPLES', 'VIP', 'VVIP']"
                      help="Which type of ticket are you minting?"
                  />
                </div>
                <div class="cost mt-2">
                  <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100/50">
                    <input type="checkbox" checked />
                    <div class="collapse-title text-sm font-bold">
                       Ticket Cost for {{ mintForm?.priceCategory }}
                    </div>
                    <div class="collapse-content">
                      <FormKit
                          type="text"
                          name="ticketCost"
                          validation="required"
                          validation-visibility="blur"
                          placeholder="Cost per Ticket"
                          validation-label="Ticket Cost"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <FormKit
                      type="number"
                      label="Quantity"
                      name="quantity"
                      validation="required|numeric"
                      validation-visibility="blur"
                      placeholder="2"
                  />
                </div>
                <div>
                  <FormKit
                      type="text"
                      label="Location"
                      name="location"
                      validation="required"
                      validation-visibility="blur"
                      placeholder="Venue of Event"
                  />
                </div>
                <div>
                  <FormKit
                      type="date"
                      value="2022-21-21"
                      name="eventDate"
                      label="Set Date"
                      validation="required|after:2022-21-21"
                      validation-visibility="live"
                  />
                </div>
                <div>
                  <FormKit
                      type="time"
                      name="eventTime"
                      label="Set Time"
                      validation="required"
                      value="23:15"
                  />
                </div>
              </div>
              <div class="mt-12">
                <FormKit
                    type="text"
                    label="Royalties"
                    name="royalties"
                    validation="required"
                    validation-visibility="blur"
                    placeholder="How to share royalties"
                />
              </div>
              <div class="mt-12">
                <FormKit
                    type="text"
                    label="Split Revenue"
                    name="splitRevenue"
                    validation="required"
                    validation-visibility="blur"
                    placeholder="How to Split Revenue"
                />
              </div>
              <div class="flex action--btns mt-12 justify-between">
              <button class="btn normal-case btn-error" @click.prevent="resetForm">Cancel</button>
                <FormKit
                    type="submit"
                    @click="handleSubmit"
                >
                  {{ isMinting ? 'Creating Ticket Item...' : 'Create Ticket Item' }}
                </FormKit>
              </div>
            </div>
          </FormKit>
        </div>
      </section>
    </main>
</template>

<style lang="scss">
.pagination {
  .btn {
    background: hsla(var(--b1)/0.4);
    backdrop-filter: blur(5px);
    color: hsla(var(--bc)/0.9);
  }
}
main {
  .formkit-wrapper, .formkit-fieldset {
    max-width: 100%;
  }

  .file--input {
    width: 100%;
    margin-top: 20px;
    position: relative;
    height: 200px;

    input {
      border: dashed 1px hsl(var(--p));
      width: 100%;
    }
    .image--uploader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      p {
        text-align: center;
        margin-bottom: 20px;
        color: hsla(var(--bc) /.7);
      }
    }
    .formkit-file-list ~ .image--uploader {
      display: none;
    }
  }
  .tickets--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    .radios {
    }
  }
}
.ticket--image {
  grid-template-columns: 1.3fr 2.3fr;
  grid-gap: 20px;
  h3 {
    font-weight: 600;
  }
}
.action--btns {
  .formkit-input[type="submit"] {
  background: linear-gradient(to right, #27a0af, #4680bd);
  color: #fafafa;
  transition: .3s ease-in-out;
  position: relative;
  border-radius: 12px;
  top: -1px;
  height: 3rem;
  display: flex;
  align-items: center;
  &:hover {
    background: linear-gradient(to right, #1c707a, #2a4d72);
    top: 0;
  }
}
  .btn {
    border-radius: 12px;
  }
}
</style>
<script setup>
import { MetadataField } from 'mintbase';
import {useStore} from "../stores";
import {EInputType} from "../types/types";

const defForm = ref({
  [EInputType.TICKETNAME]:"",
  [EInputType.DESCRIPTION]:"",
  [EInputType.EVENTGROUP]:"Business",
  [EInputType.PRICECATEGORY]:"COUPLES",
  [EInputType.TICKETCOST]:"0",
  [EInputType.TICKETMEDIA]:{},
  [EInputType.BANNER]: {},
  [EInputType.QUANTITY]:"",
  [EInputType.LOCATION]:"",
  [EInputType.EVENTDATE]:"2022-10-12",
  [EInputType.EVENTTIME]:"12:00",
  [EInputType.ROYALTIES]:"",
  [EInputType.SPLITREVENUE]:""
})
const mintForm = ref({
  [EInputType.TICKETNAME]:"",
  [EInputType.DESCRIPTION]:"",
  [EInputType.EVENTGROUP]:"Business",
  [EInputType.PRICECATEGORY]:"COUPLES",
  [EInputType.TICKETCOST]:"0",
  [EInputType.TICKETMEDIA]:{},
  [EInputType.BANNER]:{},
  [EInputType.QUANTITY]:"",
  [EInputType.LOCATION]:"",
  [EInputType.EVENTDATE]:"2022-10-12",
  [EInputType.EVENTTIME]:"12:00",
  [EInputType.ROYALTIES]:"",
  [EInputType.SPLITREVENUE]:""
})

const handleSubmit = async () => {
  isMinting.value = true
  /*Upload event banner*/
/*  try {
    const file = mintForm.value[EInputType.BANNER][0].file
    console.log('file is', file)
    const { data: fileUploadResult, error: fileError } = await wallet?.minter.uploadField(MetadataField.Media, file);

    console.log('data', fileUploadResult);

    if (fileError) {
      throw new Error(fileError);
    }
  } catch (error) {
    // handle error here
    console.error(error);
  }*/

/*  /!*Upload *!/
  try {
    const file = getValues(EInputType.FOREVER_MEDIA);
    if (file) {
      const { data: fileUploadResult, error: fileError } = await wallet.minter.uploadField(MetadataField.Animation_url, file);

      console.log('data', fileUploadResult);

      if (fileError) {
        throw new Error(fileError);
      }
    }
  } catch (error) {
    // handle error here
    console.error(error);
  }*/


}
const resetForm = () => {
  mintForm.value = defForm.value
}
/*let myData = ref({})
const { details } = useWallet()
await useWallet().then(async ({details}) => {

  myData = data
})*/
const isMinting = ref(false)
const store = useStore()
const details = computed(()=> {
  return store?.details
})
const fetched = ref(null)
watchEffect(async () => {
  await useAsyncGql({
    operation: 'FetchMinterStores',
    variables: {minter: `${details.value?.accountId}`}
  }).then((data)=>{
    fetched.value = data
  });
})
const stores = computed(()=> {
  return fetched.value?.data.store.map(stuff => {
    return stuff.name
  })
})
</script>