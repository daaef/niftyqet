<template>
  <article class="card event--card shadow-xl">
   <div class="card--top">
     <div class="cat">
       <i class="isax isax-image"></i>
     </div>
     <div class="menu dark:text-base-content/60">
       <div class="dropdown dropdown-end">
         <label tabindex="0" class="cursor-pointer">
           <img src="/dots.svg" data-uk-svg alt="">
         </label>
         <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
           <li>
             <a><i data-uk-icon="social"></i>Share</a>
           </li>
           <li><a><i class="isax isax-flag"></i>Report</a></li>
         </ul>
       </div>
     </div>
   </div>
      <figure class="px-5 pt-5">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
      </figure>
    <div class="card-body px-5 pt-5 text-left">
      <h3>Radium Animated Monster</h3>
      <div class="divider"></div>
      <div class="mr-5">
        <div class="avatar">
          <div class="w-5 rounded-full">
            <img src="https://placeimg.com/192/192/people"  alt=""/>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "EventCard"
}
</script>

<style scoped>

</style>