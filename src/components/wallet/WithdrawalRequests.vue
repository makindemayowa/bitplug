<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#home">Withdrawal Request</a></li>
      <li><a data-toggle="tab" href="#menu2">Fees</a></li>
      <li><a data-toggle="tab" href="#menu3">Banks</a></li>
      <li><a data-toggle="tab" href="#menu4">Platform Bank Accounts</a></li>
    </ul>

    <div class="tab-content">
      <div id="home" class="tab-pane fade in active">
        <WithdrawalRequestTable></WithdrawalRequestTable>
      </div>
      <div id="menu2" class="tab-pane fade">
        <FeeTable></FeeTable>
      </div>
      <div id="menu3" class="tab-pane fade">
        <BankTable></BankTable>
      </div>
      <div id="menu4" class="tab-pane fade">
        <BankAccounts></BankAccounts>
      </div>
    </div>
  </div>
</template>

<script>
import WithdrawalRequestTable from './WithdrawalRequestTable'
import FeeTable from './FeeTable'
import BankTable from './BankTable'
import BankAccounts from './BankAccounts'

export default {
  components: {
    FeeTable,
    WithdrawalRequestTable,
    BankTable,
    BankAccounts
  },
  data () {
    return {

    }
  }
}
</script>
<style>

</style>
