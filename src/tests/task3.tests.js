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

        //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
        await $('#select_113').click();
        const operatingSystemOption = await $("#select_option_102")
        await operatingSystemOption.waitForClickable();
        await operatingSystemOption.click();

        //Provisioning model: Regular
        await $("#select_117").click();
        const provisioningModelOption = await $("//md-option[@id='select_option_115']")
        await provisioningModelOption.waitForClickable();
        await provisioningModelOption.click();

        //Machine Family: General purpose 
        await $('#select_123').click();
        const machineFamilyOption = await $("//md-option[@id='select_option_119']/div")
        await machineFamilyOption.waitForClickable();
        await machineFamilyOption.click();

        //Series: N1
        await $("//md-select-value[@id='select_value_label_95']").click();
        const seriesOption = await $("//md-option[@id='select_option_224']")
        await seriesOption.waitForClickable();
        await seriesOption.click();

        //Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await $("//md-select-value[@id='select_value_label_96']").click();
        const machineTypeOption = await $("//md-option[@id='select_option_474']")
        await machineTypeOption.waitForClickable();
        await machineTypeOption.click();

        //Select “Add GPUs“
        //await $('//md-checkbox[@aria-label="Add GPUs"]').click();

        //GPU type: NVIDIA Tesla V100
        //await $("//md-select-value[@id='select_value_label_504']").click();
        //const GpuType = await $("//md-select-value[@id='select_value_label_504']");
        //await GpuType.waitForClickable();
        //await GpuType.click();
        //const GpuTypeOption = await $("//md-option[@id='select_option_585']")
        //await GpuTypeOption.waitForClickable();
        //await GpuTypeOption.click();


        //Number of GPUs: 1

    
        //Local SSD: 2x375 Gb
        await $("//md-select-value[@id='select_value_label_468']").click();
        const localSsdOption = await $("//md-option[@id='select_option_495']")
        await localSsdOption.waitForClickable();
        await localSsdOption.click();

        //Datacenter location: Frankfurt (europe-west3)
        await $("//md-select-value[@id='select_value_label_98']").click();
        const datacenterLocationOption = await $("//md-option[@id='select_option_268']")
        await datacenterLocationOption.waitForClickable();
        await datacenterLocationOption.click();

        //Committed usage: 1 Year
        await $("//md-select-value[@id='select_value_label_99']").click();
        const committedUsageOption = await $("//md-option[@id='select_option_138']")
        await committedUsageOption.waitForClickable();
        await committedUsageOption.click();

        //Click 'Add to Estimate'.
        const addToEstimateButton = await $("//form[@name='ComputeEngineForm']//button[@type='button'][normalize-space()='Add to Estimate']");
        await addToEstimateButton.waitForClickable();
        await addToEstimateButton.click();

        //Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
        await $('//div[@class="cpc-cart-total"]/h2//b[contains(text(), "Total Estimated Cost")]').waitForExist();

        //Select 'EMAIL ESTIMATE'.
        const emailEstimateButton = await $("//button[@id='Email Estimate']");
        await emailEstimateButton.waitForClickable();
        await emailEstimateButton.click();

        await browser.pause(1000)
    });

});