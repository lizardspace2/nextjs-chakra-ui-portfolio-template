# Palkeoramix decompiler. 

def storage:
  _auth_mode is uint8 at storage 0
  _authorityAddress is addr at storage 0 offset 8
  stor0 is uint256 at storage 0 offset 8
  stor0 is uint256 at storage 0
  controllerAddress is addr at storage 1
  stor1 is uint256 at storage 1

def getController() payable: 
  return addr(controllerAddress)

def _authority() payable: 
  return _authorityAddress

def _auth_mode() payable: 
  return _auth_mode

#
#  Regular functions
#

def _fallback() payable: # default function
  stop

def totalSupply() payable: 
  call addr(controllerAddress).totalSupply() with:
       gas gas_remaining - 25050 wei
  require ext_call.success
  return ext_call.return_data[0]

def balanceOf(address _owner) payable: 
  call addr(controllerAddress).balanceOf(address tokenOwner) with:
       gas gas_remaining - 25050 wei
      args _owner
  require ext_call.success
  return ext_call.return_data[0]

def allowance(address _owner, address _spender) payable: 
  call addr(controllerAddress).allowance(address tokenOwner, address spender) with:
       gas gas_remaining - 25050 wei
      args addr(_owner), _spender
  require ext_call.success
  return ext_call.return_data[0]

def transfer(address _to, uint256 _value) payable: 
  call addr(controllerAddress).transfer(address caller, address to, uint256 amount) with:
       gas gas_remaining - 25050 wei
      args caller, addr(_to), _value
  require ext_call.success
  return ext_call.return_data[0]

def approve(address _spender, uint256 _value) payable: 
  call addr(controllerAddress).approve(address caller, address spender, uint256 amount) with:
       gas gas_remaining - 25050 wei
      args caller, addr(_spender), _value
  require ext_call.success
  return ext_call.return_data[0]

def transferFrom(address _from, address _to, uint256 _value) payable: 
  call addr(controllerAddress).transferFrom(address caller, address from, address to, uint256 amount) with:
       gas gas_remaining - 25050 wei
      args 0, uint32(caller), addr(_from), addr(_to), _value
  require ext_call.success
  return ext_call.return_data[0]

def setController(address _c) payable: 
  if not _auth_mode:
      require caller == _authorityAddress
  else:
      require _auth_mode == 1
      call _authorityAddress.canCall(address caller, address code, bytes4 sig) with:
           gas gas_remaining - 25050 wei
          args caller, addr(this.address), call.func_hash
      require ext_call.success
      require ext_call.return_data[0]
  uint256(stor1) = _c or Mask(96, 160, uint256(stor1))

def emitTransfer(address _from, address _to, uint256 _value) payable: 
  if not _auth_mode:
      require caller == _authorityAddress
  else:
      require _auth_mode == 1
      call _authorityAddress.canCall(address caller, address code, bytes4 sig) with:
           gas gas_remaining - 25050 wei
          args caller, addr(this.address), call.func_hash
      require ext_call.success
      require ext_call.return_data[0]
  log Transfer(
        address from=_value,
        address to=_from,
        uint256 tokens=_to)

def emitApproval(address _owner, address _spender, uint256 _value) payable: 
  if not _auth_mode:
      require caller == _authorityAddress
  else:
      require _auth_mode == 1
      call _authorityAddress.canCall(address caller, address code, bytes4 sig) with:
           gas gas_remaining - 25050 wei
          args caller, addr(this.address), call.func_hash
      require ext_call.success
      require ext_call.return_data[0]
  log Approval(
        address tokenOwner=_value,
        address spender=_owner,
        uint256 tokens=_spender)

def unknown7e1db2a1(uint256 _param1, uint256 _param2) payable: 
  if not _auth_mode:
      require caller == _authorityAddress
  else:
      require _auth_mode == 1
      call _authorityAddress.canCall(address caller, address code, bytes4 sig) with:
           gas gas_remaining - 25050 wei
          args caller, addr(this.address), call.func_hash
      require ext_call.success
      require ext_call.return_data[0]
  Mask(248, 0, stor0.field_8) = Mask(248, 0, _param1)
  uint256(stor0.field_0) = _param2 or Mask(248, 8, uint256(stor0.field_0))
  log 0xb96a5204: addr(_param1), _param2
