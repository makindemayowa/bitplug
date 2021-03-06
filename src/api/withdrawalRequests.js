import { blackAxios } from '@/config'
import { getAll, getById, add, edit, gDelete } from './generic'

export default {
  resource: {
    getwithDrawalRequests: '/admin/withdrawal_requests',
    confirmWithdrawalRequest: '/admin/withdrawal_requests/confirm',
    rejectWithdrawalRequest: '/admin/withdrawal_requests/reject',
    holdWithdrawalRequest: '/admin/withdrawal_requests/hold',
  },

  getwithdrawalRequests(dargs) {
    /**
     * Get all withdrawal requests
     */
    return blackAxios.get(this.resource.getwithDrawalRequests, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getAll.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getAll.error({
          error: error,
          defaultmsg: ''
        })
      })
  },

  confirmWithdrawalRequest(dargs) {
    /**
     * Confirm a withdrawal request
     */
    return blackAxios.post(this.resource.confirmWithdrawalRequest+`/${dargs.id}`,{
      processor_user_id:dargs.id
    }, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getById.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getById.error({
          error: error,
          defaultmsg: ''
        })
      })
  },


  rejectWithdrawalRequest(dargs) {
    /**
     * Reject a withdrawal request
     */
    return blackAxios.put(this.resource.rejectWithdrawalRequest+`/${dargs.id}`,{
      processor_user_id:dargs.id
    }, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getById.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getById.error({
          error: error,
          defaultmsg: ''
        })
      })
  },

  holdWithdrawalRequest(dargs) {
    /**
     * Put a withdrawal request on hold
     */
    return blackAxios.get(this.resource.holdWithdrawalRequest+`/${dargs.id}`,{
      processor_user_id:dargs.id
    }, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getById.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getById.error({
          error: error,
          defaultmsg: ''
        })
      })
  },
}
