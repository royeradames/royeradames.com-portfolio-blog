<script>
    let isHovered = false;
    let links = [
        { href: '/', text: 'Home' },
        { href: '/blog', text: 'Blog' },
        { href: '/projects', text: 'Projects' }
    ];
</script>

<header class="p-4 flex justify-between items-center">
    <h1 class="text-4xl font-bold m-0 transition-colors duration-300 {isHovered ? 'text-gray-600' : 'text-gray-800'}">
        Royer Adames
    </h1>
    <nav>
        <ul class="flex gap-8 list-none m-0 p-0">
            {#each links as {href, text}}
                <li>
                    <a 
                        {href} 
                        class="text-gray-800 no-underline font-medium hover:text-gray-600 transition-colors duration-300"
                        on:mouseenter={() => isHovered = true}
                        on:mouseleave={() => isHovered = false}
                    >
                        {text}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header> 