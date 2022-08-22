import { reactive } from 'vue'
import { ethers } from 'ethers'

const config = {
    ABI:    ['string', 'string'],
    DATA:   ['DAO', 'revolution']
}

const getBytes = () => {
    return (
        ethers.utils.defaultAbiCoder.encode(config.ABI, config.DATA)
    )
}

export const store = reactive(
    {
        state: {
            isAuthenticated: false,
        },
        action: {
            authenticate(hash) {
                console.log("HASH: ", hash);
                console.log("CONFIG: ", config);
                console.log("BYTES: ", getBytes());
                console.log(ethers.utils.id(getBytes()));
                
                if(hash == ethers.utils.id(getBytes())) {
                    store.state.isAuthenticated = true
                }else {
                    store.state.isAuthenticated = false
                }
                console.log(store.state.isAuthenticated);
            }
        }
    
})

export default store
