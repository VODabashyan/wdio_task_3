describe('web driver io task 3', async () => {
    beforeEach(async () => {
        await browser.url('https://cloud.google.com/');
    });

    it('calculating the estimate', async () => {
        await $('.YSM5S').click();
        await $("input[class='qdOxv-fmcmS-wGMbrd']").setValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");

        await $("//a[@href='https://cloud.google.com/products/calculator-legacy?hl=es-419']").click();

        const iframe1 = await $('devsite-iframe iframe');
        await iframe1.waitForExist();
        await browser.switchToFrame(iframe1);
        const iframe2 = await $('#myFrame');
        await iframe2.waitForExist();
        await browser.switchToFrame(iframe2);
        await $("//md-tab-item[@id='tab-item-1']").click();
        await $('//input[@id="input_100"]').setValue(4);
        await $('#select_113').click();
        await $('#select_option_102').click();
        await $("#select_117").click();
        await $(".md-text").click();
        await $('#select_123').click();
        await $(".md-text").click();
        //await $('#select_125').click();
        //await $('.md-text ng-binding').click();
        //await $("//md-option[@id='select_option_224']/div[@class='md-text ng-binding']").click();

        //Machine Family: General purpose
        //Series: N1
        //Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        //Select “Add GPUs“
        //GPU type: NVIDIA Tesla V100
        //Number of GPUs: 1
        //Local SSD: 2x375 Gb
        //Datacenter location: Frankfurt (europe-west3)
        //Committed usage: 1 Year
        //Other options leave in the default state.

        //await $("//button[@class='md-raised md-primary cpc-button md-button md-ink-ripple']").click();


        await browser.pause(1000)
    });
});