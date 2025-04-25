const loadData = async (isSeeMore) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const dataLoad = data.data.tools;
    displayData(dataLoad, isSeeMore);
}

const displayData = (tools, isSeeMore) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = '';

    const seeMoreContainer = document.getElementById('see-more-container');
    if (tools.length > 6 && !isSeeMore) {
        seeMoreContainer.classList.remove('hidden');
    }
    else {
        seeMoreContainer.classList.add('hidden');
    }

    if (!isSeeMore) {
        tools = tools.slice(0, 6);
    }

    tools.forEach(tool => {
        const dataCard = document.createElement('div');
        dataCard.classList = 'card border-2 p-5';
        dataCard.innerHTML = `
            <figure>
                <img src="${tool?.image}" alt="Shoes" />
            </figure>
            <div class="mt-6">
                <h4 class="text-[#111111] font-semibold text-xl">Features</h4>
                <p class="text-[#585858] mt-4">1. ${tool?.features[0]}</p>
                <p class="text-[#585858]">2. ${tool?.features[1]}</p>
                <p class="text-[#585858]">3. ${tool?.features[2] || 'No Data Available'}</p>
                <div class="border-t-2 mt-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-[#111111] text-2xl font-semibold mt-4">${tool?.name}</h2>
                            <div class="flex gap-2 text-[#585858] mt-3">
                                <img class="w-[20px]" src="images/calendar.png" alt="">
                                <p>${tool?.published_in}</p>
                            </div>
                        </div>
                        <div>
                            <button onclick="handleShowDetails('${tool?.id}')" 
                            class="btn bg-[#FEF7F7] rounded-full border-none"><img class="w-[30px]"
                                    src="images/arrow.png" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        dataContainer.appendChild(dataCard);
    })

    toggleLoadingSpinner(false);
}

const handleShowDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const dataDetails = data.data;
    showDataDetails(dataDetails);
}

const showDataDetails = (data) => {
    const showDisplay = document.getElementById('show-display');
    showDisplay.innerHTML = `
        <div class="bg-[#EB57570D] rounded-2xl p-8 border border-[#EB5757]">
            <h2 class="text-[#111111] font-semibold text-2xl">${data?.description}</h2>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="py-5 px-6 bg-white rounded-2xl">
                    <h2 class="text-[#03A30A] font-bold"><span>${data?.pricing[0]?.price}</span> <span>${data?.pricing[0]?.plan}</span></h2>
                </div>
                <div class="py-5 px-6 bg-white rounded-2xl">
                    <h2 class="text-[#F28927] font-bold"><span>${data?.pricing[1]?.price}</span> <span>${data?.pricing[1]?.plan}</span></h2>
                </div>
                <div class="py-5 px-6 bg-white rounded-2xl">
                    <h2 class="text-[#EB5757] font-bold"><span>${data?.pricing[2]?.price}</span> <span>${data?.pricing[2]?.plan}</span></h2>
                </div>
            </div>
            <div class="my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h1 class="text-[#111111] font-semibold text-2xl mb-4">Features</h1>
                    <li class="text-[#585858]">${data?.features[1]?.feature_name}</li>
                    <li class="text-[#585858]">${data?.features[2]?.feature_name}</li>
                    <li class="text-[#585858]">${data?.features[3]?.feature_name}</li>
                </div>
                <div>
                    <h1 class="text-[#111111] font-semibold text-2xl mb-4">Integrations</h1>
                    <li class="text-[#585858]">${data?.integrations[0]}</li>
                    <li class="text-[#585858]">${data?.integrations[1]}</li>
                    <li class="text-[#585858]">${data?.integrations[2]}</li>
                </div>
            </div>
        </div>
        <div class="rounded-2xl text-center p-8 border-2 border-[#E7E7E7]">
            <img class="rounded-2xl" src="${data?.image_link[0]}" alt="">
            <h2 class="text-[#111111] font-semibold text-2xl mt-6">${data?.input_output_examples[0]?.input}</h2>
            <p class="text-[#585858] mt-4 ">${data?.input_output_examples[0]?.output}</p>
        </div>
    `;

    show_details_container.showModal();
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

const handleSeeMore = () => {
    toggleLoadingSpinner(true);
    loadData(true);
}

loadData();