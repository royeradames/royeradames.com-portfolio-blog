<script>
  import profileImage from '../assets/profile-image.png';
</script>

<section class="flex h-[842px] w-[180px] shrink-0 flex-col items-start gap-4 bg-[#2E2E48] p-6">
  <header class="flex flex-col items-start justify-center gap-2 self-stretch">
    <img
      src={profileImage.src}
      height="48"
      width="48"
      alt="Profile"
      class="h-12 w-12 rounded-[100px] [background:url(<path-to-image>)_lightgray_50%_/_cover_no-repeat]"
    />
    <hgroup class="flex flex-col items-start gap-1 self-stretch">
      <h1
        class="self-stretch text-base font-medium leading-5 tracking-[-0.32px] text-[color:var(--Gray-Lightest,#E2E6EE)] [font-family:Outfit]"
      >
        Royer Adames
      </h1>
      <p
        class="text-primary-gradient self-stretch text-xs font-medium leading-4 tracking-[0.12px] [font-family:Outfit]"
      >
        Full-Stack Developer
      </p>
    </hgroup>
  </header>

  <blockquote>
    <p
      class="self-stretch text-[9px] font-medium leading-3 tracking-[0.18px] text-[color:var(--Gray-Lighter,#D9DFE8)] [font-family:Outfit]"
    >
      <span class="quote-mark">"</span>People value web development that values their needs.<span
        class="quote-mark">"</span
      >
    </p>
    <cite
      class="self-stretch text-[6px] font-normal leading-[8px] tracking-[0.06px] text-[color:var(--Gray-Light,#ACB1C3)] [font-family:'DM_Sans']"
      >Royer Adames</cite
    >
  </blockquote>

  <ul class="m-0 flex w-full list-none gap-3 border-y border-white/10 py-4">
    <li>
      <a href="mailto:adamesroyer@gmail.com" class="group flex items-center gap-2 self-stretch">
        <span
          class="flex h-4 w-4 shrink-0 items-center justify-center rounded-[100px] group-hover:[background:var(--Gray-Darkest,#232339)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M8.3335 8.33335H1.66683C1.20659 8.33335 0.833496 7.96026 0.833496 7.50002V2.46377C0.852916 2.01775 1.22038 1.66627 1.66683 1.66669H8.3335C8.79373 1.66669 9.16683 2.03978 9.16683 2.50002V7.50002C9.16683 7.96026 8.79373 8.33335 8.3335 8.33335ZM1.66683 3.27835V7.50002H8.3335V3.27835L5.00016 5.50002L1.66683 3.27835ZM2.00016 2.50002L5.00016 4.50002L8.00016 2.50002H2.00016Z"
              fill="#E2E6EE"
            />
          </svg>
        </span>
        <div>
          <p
            class="self-stretch text-[6px] font-normal leading-[8px] tracking-[0.06px] text-[color:var(--Gray-Light,#ACB1C3)] [font-family:'DM_Sans']"
          >
            Email
          </p>
          <p
            class="self-stretch text-[7px] font-medium leading-[9px] text-[color:var(--Gray-Lighter,#D9DFE8)] [font-family:'DM_Sans']"
          >
            adamesroyer@gmail.com
          </p>
        </div>
      </a>
    </li>
  </ul>
</section>
