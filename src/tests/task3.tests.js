describe('web driver io task 3', async () => {
    beforeEach(async () => {
        await browser.url('https://cloud.google.com/');
    });

    it('calculating the estimate', async () => {
        await $('.YSM5S').click();
        await $("input[class='qdOxv-fmcmS-wGMbrd']").setValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");

        await $('//a[href="https://cloud.google.com/products/calculator-legacy?hl=es-419"]').click();
        
    });
});