const { expect } = require("chai");

describe("CAKEStake", () => {
  before(async () => {
    [this.owner] = await ethers.getSigners();
    const CAKEStake = await ethers.getContractFactory("CAKEStake");
    this.cakeStake = await CAKEStake.deploy("0xBeF2C0415CC95b57a6e96cEE05804c8259601a2f", 1616861252656000, "0x603d0F722A4111a56F9C1c11d3429d1f3D8823fa");
    
    // this.cakeStakeRst = await cakeStake.deployed();
  });
  it('Deployment', () => {
    const ownerAdderss = this.owner.address;
    expect(ownerAdderss).to.equal('0xBeF2C0415CC95b57a6e96cEE05804c8259601a2f');
  });
  it ('Should deloy contract to testnet and return commission wallet address', async () => {
    await this.cakeStake.deployed();
    
    // console.log('project_fee--->', project_fee);
    // expect(project_fee).to.equal(100);
  });

});
