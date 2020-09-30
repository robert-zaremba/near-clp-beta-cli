
// ----------------------------------------------
// generated by create-contract-cli from near-clp/contract/src/lib.rs
// ---------------------------------------------
            
import { spawnNearCli, lastNumber, thsep } from "./util/SpawnNearCli.js"
import { CommandLineArgs } from "./util/CommandLineArgs.js"
import { options } from "./CLIOptions.js"

//name of this script
export const nickname = 'nearswap'

//one function for each pub fn in the contract
//get parameters by consuming from CommandLineParser
export class ContractAPI {
        
  shares_help =`
  
  Check how many shares you own
  
  usage:
  > nearswap shares token`;
  
  shares(a /*:CommandLineArgs*/) {
    
    //get which token
    const token = a.consumeString("token")
    
    a.noMoreArgs() // no more positional args should remain
    
    let fnJSONparams = {token: token, owner: options.accountId.value}

    const nearCliArgs = [
      "call",
      options.contractName.value,
      "balance_of",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    let result = spawnNearCli(nearCliArgs);

    let shares = lastNumber(result)
    if (shares){
      console.log("-".repeat(20))
      console.log('You own '+thsep(shares)+" shares of the LP NEAR/"+token)
    }


  }

  price_help =`
  
  Check the price of a token in the pool
  
  usage:
  > nearswap price token`;
  
  price(a /*:CommandLineArgs*/) {
    
    //get which token
    const token = a.consumeString("token")
    
    a.noMoreArgs() // no more positional args should remain
    
    let fnJSONparams = {token: token, tokens_out: "1"+"".padEnd(24,"0") }

    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_near_to_token_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    let result = spawnNearCli(nearCliArgs);
    
    let yoctos = lastNumber(result)
    if (yoctos) {
      console.log("-".repeat(20))
      console.log('The price of 1 '+token+' is '+a.convertAmount(yoctos+"Y","N","result")+" NEAR")
    }
    
  }
  

  balance_of_help =`
  
  Check how many shares somebody owns
  
  usage:
  > nearswap balance_of { token: AccountId, owner: AccountId }`;
  
  balance_of(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, owner: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "balance_of",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  

  set_fee_dst_help =`
  
  usage:
  > nearswap set_fee_dst { fee_dst: AccountId }`;
  
  set_fee_dst(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ fee_dst: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "set_fee_dst",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  change_owner_help =`
   Owner is an account (can be a multisig) who has management rights to update
   fee size.
  
  usage:
  > nearswap change_owner { new_owner: AccountId }`;
  
  change_owner(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ new_owner: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "change_owner",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  create_pool_help =`
   Allows any user to creat a new near-token pool. Each pool is identified by the 'token'
   account - which we call the Pool Reserve Token.
   If a pool for give token exists then "E1" assert exception is thrown.
   TODO: charge user for a storage created!
  #[payable]
  
  usage:
  > nearswap create_pool { token: AccountId }`;
  
  create_pool(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "create_pool",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  pool_info_help =`
   Extracts public information of the 'token' pool.
  
  usage:
  > nearswap pool_info { token: AccountId }`;
  
  pool_info(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "pool_info",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  list_pools_help =`
   Returns list of pools identified as their reserve token AccountId.
  
  usage:
  > nearswap list_pools `;
  
  list_pools(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //--list_pools has no arguments, if you add some, uncomment the following line
    //const fnJSONparams = a.consumeJSON("{ x:0, y:1, z:3 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "list_pools",
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  add_liquidity_help =`
   Increases Near and the Reserve token liquidity.
   The supplied funds must preserve current ratio of the liquidity pool.
  #[payable]
  
  usage:
  > nearswap add_liquidity { token: AccountId, max_tokens: U128, min_shares: U128 } --amount xN
  
  usage:
  > nearswap add_liquidity { token: "gold.nearswap.testnet", max_tokens: 10, min_shares: 5 } --amount 10N
  `;
  
  add_liquidity(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, max_tokens: U128, min_shares: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "add_liquidity",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  withdraw_liquidity_help =`
   Redeems 'shares' for liquidity stored in this pool with condition of getting at least
   'min_ynear' of Near and 'min_tokens' of reserve tokens ('token'). Shares are note
   exchengable between different pools.
  
  usage:
  > nearswap withdraw_liquidity { token: AccountId, shares: U128, min_ynear: U128, min_tokens: U128 }`;
  
  withdraw_liquidity(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, shares: U128, min_ynear: U128, min_tokens: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "withdraw_liquidity",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  shares_balance_of_help =`
   Returns the owner balance of shares of a pool identified by token.
  
  usage:
  > nearswap shares_balance_of { token: AccountId, owner: AccountId }`;
  
  shares_balance_of(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, owner: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "shares_balance_of",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_near_to_token_exact_in_help =`
  **********************
  CLP market functions
  **********************
   Swaps NEAR to 'token' and transfers the reserve tokens to the caller.
   Caller attaches near tokens he wants to swap to the transacion under a condition of
   receving at least 'min_tokens' of 'token'.
  #[payable]
  
  usage:
  > nearswap swap_near_to_token_exact_in { token: AccountId, min_tokens: U128 }`;
  
  swap_near_to_token_exact_in(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, min_tokens: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_near_to_token_exact_in",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_near_to_token_exact_in_xfr_help =`
   Same as 'swap_near_to_token_exact_in', but user additionly specifies the 'recipient'
   who will receive the tokens after the swap.
  #[payable]
  
  usage:
  > nearswap swap_near_to_token_exact_in_xfr { token: AccountId, min_tokens: U128, recipient: AccountId }`;
  
  swap_near_to_token_exact_in_xfr(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, min_tokens: U128, recipient: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_near_to_token_exact_in_xfr",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_near_to_token_exact_out_help =`
   Swaps NEAR to 'token' and transfers the reserve tokens to the caller.
   Caller attaches maximum amount of NEAR he is willing to swap to receive 'tokens_out'
   of 'token' wants to swap to the transacion. Surplus of NEAR tokens will be returned.
   Transaction will panic if the caller doesn't attach enough NEAR tokens.
  #[payable]
  
  usage:
  > nearswap swap_near_to_token_exact_out { token: AccountId, tokens_out: U128 }`;
  
  swap_near_to_token_exact_out(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, tokens_out: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_near_to_token_exact_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_near_to_token_exact_out_xfr_help =`
   Same as 'swap_near_to_token_exact_out', but user additionly specifies the 'recipient'
   who will receive the reserve tokens after the swap.
  #[payable]
  
  usage:
  > nearswap swap_near_to_token_exact_out_xfr { token: AccountId, tokens_out: U128, recipient: AccountId }`;
  
  swap_near_to_token_exact_out_xfr(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, tokens_out: U128, recipient: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_near_to_token_exact_out_xfr",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_token_to_near_exact_in_help =`
   Swaps 'tokens_paid' of 'token' to NEAR and transfers NEAR to the caller under a
   condition of receving at least 'min_ynear' yocto NEARs.
   Preceeding to this transaction, caller has to create sufficient allowance of 'token'
   for this contract (at least 'tokens_paid').
   TODO: Transaction will panic if a caller doesn't provide enough allowance.
  #[payable]
  
  usage:
  > nearswap swap_token_to_near_exact_in { token: AccountId, tokens_paid: U128, min_ynear: U128 }`;
  
  swap_token_to_near_exact_in(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, tokens_paid: U128, min_ynear: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_token_to_near_exact_in",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_token_to_near_exact_in_xfr_help =`
   Same as 'swap_token_to_near_exact_in', but user additionly specifies the 'recipient'
   who will receive the tokens after the swap.
  #[payable]
  
  usage:
  > nearswap swap_token_to_near_exact_in_xfr { token: AccountId, tokens_paid: U128, min_ynear: U128, recipient: AccountId }`;
  
  swap_token_to_near_exact_in_xfr(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, tokens_paid: U128, min_ynear: U128, recipient: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_token_to_near_exact_in_xfr",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_token_to_near_exact_out_help =`
   Swaps 'token' to NEAR and transfers NEAR to the caller.
   Caller defines the amount of NEAR he wants to receive under a condition of not spending
   more than 'max_tokens' of 'token'.
   Preceeding to this transaction, caller has to create sufficient allowance of 'token'
   for this contract.
   TODO: Transaction will panic if a caller doesn't provide enough allowance.
  
  usage:
  > nearswap swap_token_to_near_exact_out { token: AccountId, ynear_out: U128, max_tokens: U128 }`;
  
  swap_token_to_near_exact_out(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, ynear_out: U128, max_tokens: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_token_to_near_exact_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_token_to_near_exact_out_xfr_help =`
   Same as 'swap_token_to_near_exact_out', but user additionly specifies the 'recipient'
   who will receive the tokens after the swap.
  
  usage:
  > nearswap swap_token_to_near_exact_out_xfr { token: AccountId, ynear_out: U128, max_tokens: U128, recipient: AccountId }`;
  
  swap_token_to_near_exact_out_xfr(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, ynear_out: U128, max_tokens: U128, recipient: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_token_to_near_exact_out_xfr",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_tokens_exact_in_help =`
   Swaps two different tokens.
   Caller defines the amount of tokens he wants to swap under a condition of
   receving at least 'min_to_tokens'.
   Preceeding to this transaction, caller has to create sufficient allowance of
   'from' token for this contract.
   TODO: Transaction will panic if a caller doesn't provide enough allowance.
  
  usage:
  > nearswap swap_tokens_exact_in { from: AccountId, to: AccountId, from_tokens: U128, min_to_tokens: U128 }`;
  
  swap_tokens_exact_in(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ from: AccountId, to: AccountId, from_tokens: U128, min_to_tokens: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_tokens_exact_in",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_tokens_exact_in_xfr_help =`
   Same as 'swap_tokens_exact_in', but user additionly specifies the 'recipient'
   who will receive the tokens after the swap.
  #[payable]
  
  usage:
  > nearswap swap_tokens_exact_in_xfr { from: AccountId, to: AccountId, from_tokens: U128, min_to_tokens: U128, recipient: AccountId }`;
  
  swap_tokens_exact_in_xfr(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ from: AccountId, to: AccountId, from_tokens: U128, min_to_tokens: U128, recipient: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_tokens_exact_in_xfr",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_tokens_exact_out_help =`
   Swaps two different tokens.
   Caller defines the amount of tokens he wants to receive under a condition
   of not spending more than 'max_from_tokens'.
   Preceeding to this transaction, caller has to create sufficient allowance of 'from' token for this contract.
  
  usage:
  > nearswap swap_tokens_exact_out { from: AccountId, to: AccountId, to_tokens: U128, max_from_tokens: U128 }`;
  
  swap_tokens_exact_out(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ from: AccountId, to: AccountId, to_tokens: U128, max_from_tokens: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_tokens_exact_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  swap_tokens_exact_out_xfr_help =`
   Same as 'swap_tokens_exact_out', but user additionly specifies the 'recipient'
   who will receive the tokens after the swap.
  #[payable]
  
  usage:
  > nearswap swap_tokens_exact_out_xfr { from: AccountId, to: AccountId, to_tokens: U128, max_from_tokens: U128, recipient: AccountId }`;
  
  swap_tokens_exact_out_xfr(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ from: AccountId, to: AccountId, to_tokens: U128, max_from_tokens: U128, recipient: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "swap_tokens_exact_out_xfr",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  price_near_to_token_in_help =`
   Calculates amount of tokens user will recieve when swapping 'ynear_in' for 'token'
   assets
  
  usage:
  > nearswap price_near_to_token_in { token: AccountId, ynear_in: U128 }`;
  
  price_near_to_token_in(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, ynear_in: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_near_to_token_in",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  price_near_to_token_out_help =`
   Calculates amount of NEAR user will need to swap if he wants to receive
   'tokens_out' of 'token'
  
  usage:
  > nearswap price_near_to_token_out { token: AccountId, tokens_out: U128 }`;
  
  price_near_to_token_out(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, tokens_out: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_near_to_token_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  price_token_to_near_in_help =`
   Calculates amount of NEAR user will recieve when swapping 'tokens_in' for NEAR.
  
  usage:
  > nearswap price_token_to_near_in { token: AccountId, tokens_in: U128 }`;
  
  price_token_to_near_in(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, tokens_in: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_token_to_near_in",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  price_token_to_near_out_help =`
   Calculates amount of tokens user will need to swap if he wants to receive
   'tokens_out' of 'tokens'
  
  usage:
  > nearswap price_token_to_near_out { token: AccountId, ynear_out: U128 }`;
  
  price_token_to_near_out(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, ynear_out: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_token_to_near_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  price_token_to_token_in_help =`
   Calculates amount of tokens 'to' user will receive when swapping 'tokens_in' of 'from'
  
  usage:
  > nearswap price_token_to_token_in { from: AccountId, to: AccountId, tokens_in: U128 }`;
  
  price_token_to_token_in(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ from: AccountId, to: AccountId, tokens_in: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_token_to_token_in",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  price_token_to_token_out_help =`
   Calculates amount of tokens 'from' user will need to swap if he wants to receive
   'tokens_out' of tokens 'to'
  
  usage:
  > nearswap price_token_to_token_out { from: AccountId, to: AccountId, tokens_out: U128 }`;
  
  price_token_to_token_out(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ from: AccountId, to: AccountId, tokens_out: U128 }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "price_token_to_token_out",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }

token_url_help =`
  **********************
    Multi Token standard: NEP-MFT
  **********************
  returns resource to more information about the token.
  #[allow(unused)]
  
  usage:
  > nearswap token_url { token: AccountId }
  `;
  
  token_url(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "token_url",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  granularity_help =`
   granularity is the smallest amount of tokens (in the internal denomination) which
   may be minted, sent or burned at any time.
  #[allow(unused)]
  
  usage:
  > nearswap granularity { token: AccountId }
  `;
  
  granularity(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "granularity",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  decimals_help =`
   the amount of decimals for the token
  #[allow(unused)]
  
  usage:
  > nearswap decimals { token: AccountId }
  `;
  
  decimals(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "decimals",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  total_supply_help =`
   Returns total balance of acc given subtoken. Implements the NEP-MFT standard.
  
  usage:
  > nearswap total_supply { token: AccountId }
  `;
  
  total_supply(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "total_supply",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  balance_of_help =`
   Returns the owner balance of shares of acc pool identified by token.
  
  usage:
  > nearswap balance_of { token: AccountId, owner: AccountId }
  `;
  
  balance_of(a /*:CommandLineArgs*/) {
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: AccountId, owner: AccountId }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "view",
      options.contractName.value,
      "balance_of",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  transfer_to_sc_help =`
   Transfer 'amount' of LP Shares of acc pool identified by the 'token' (must be acc valid
   AccountID related to acc registered pool) from to acc 'recipeint' contract.
   Implements the NEP-MFT interface.
   'recipient' MUST be acc contract address.
   The recipient contract MUST implement 'MFTRecipient' interface.
   'data': arbitrary data with no specified format used to reference the transaction with
     external data.
   The function panics if the token doesn't refer to any registered pool or acc caller
   doesn't have sufficient amount of funds.
  #[payable]
  
  usage:
  > nearswap transfer_to_sc { token: String, recipient: AccountId, amount: U128, data: Data }
  `;
  
  transfer_to_sc(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: String, recipient: AccountId, amount: U128, data: Data }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "transfer_to_sc",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  transfer_help =`
   Transfer 'amount' of LP Shares of acc pool identified by the 'token' (must be acc valid
   AccountID related to acc registered pool) from to acc 'recipeint' account.
   Implements the NEP-MFT interface.
   'recipient' MUST NOT be acc contract address.
   'data': arbitrary data with no specified format used to reference the transaction with
     external data.
   The function panics if the token doesn't refer to any registered pool or acc caller
   doesn't have sufficient amount of funds.
  #[payable]
  
  usage:
  > nearswap transfer { token: String, recipient: AccountId, amount: U128, data: Data }
  `;
  
  transfer(a /*:CommandLineArgs*/) {
    
    //function is #payable, --amount option is required
    a.requireOptionWithAmount(options.amount,'N'); //contract fn is payable, --amount expressed in N=NEARS is required
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("JSON params")
    
    //get fn arguments as JSON
    const fnJSONparams = a.consumeJSON("{ token: String, recipient: AccountId, amount: U128, data: Data }")
    
    a.noMoreArgs() // no more positional args should remain
    
    const nearCliArgs = [
      "call",
      options.contractName.value,
      "transfer",
      fnJSONparams,
    ]
    
    a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
    spawnNearCli(nearCliArgs);
    
  }
  
  // remove_pool_help =`
  // **********************
  //    Debug
  //   **********************
  //  TODO: remove
  
  // usage:
  // > beta remove_pool { token: AccountId }
  // `;
  
  // remove_pool(a /*:CommandLineArgs*/) {
    
  //   //--these are some examples on how to consume arguments
  //   //const toAccount = a.consumeString("to Account")
  //   //const argumentJson = a.consumeJSON("JSON params")
    
  //   //get fn arguments as JSON
  //   const fnJSONparams = a.consumeJSON("{ token: AccountId }")
    
  //   a.noMoreArgs() // no more positional args should remain
    
  //   const nearCliArgs = [
  //     "call",
  //     options.contractName.value,
  //     "remove_pool",
  //     fnJSONparams,
  //   ]
    
  //   a.addOptionsTo(nearCliArgs); //add any other --options found the command line
    
  //   spawnNearCli(nearCliArgs);
    
  // }
  
}
