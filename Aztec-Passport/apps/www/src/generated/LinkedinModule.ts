
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  type UnencryptedL2Log,
  type Wallet,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import LinkedinModuleContractArtifactJson from './target/linkedin_module-LinkedinModule.json' assert { type: 'json' };
export const LinkedinModuleContractArtifact = loadContractArtifact(LinkedinModuleContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract LinkedinModule;
 */
export class LinkedinModuleContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, LinkedinModuleContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, LinkedinModuleContract.artifact, wallet) as Promise<LinkedinModuleContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, _admin: AztecAddressLike) {
    return new DeployMethod<LinkedinModuleContract>(Fr.ZERO, wallet, LinkedinModuleContractArtifact, LinkedinModuleContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeysHash(publicKeysHash: Fr, wallet: Wallet, _admin: AztecAddressLike) {
    return new DeployMethod<LinkedinModuleContract>(publicKeysHash, wallet, LinkedinModuleContractArtifact, LinkedinModuleContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof LinkedinModuleContract['methods']>(
    opts: { publicKeysHash?: Fr; method?: M; wallet: Wallet },
    ...args: Parameters<LinkedinModuleContract['methods'][M]>
  ) {
    return new DeployMethod<LinkedinModuleContract>(
      opts.publicKeysHash ?? Fr.ZERO,
      opts.wallet,
      LinkedinModuleContractArtifact,
      LinkedinModuleContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return LinkedinModuleContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'admin' | 'passport_address'> {
      return {
        admin: {
      slot: new Fr(1n),
    },
passport_address: {
      slot: new Fr(2n),
    }
      } as ContractStorageLayout<'admin' | 'passport_address'>;
    }
    

  public static get notes(): ContractNotes<'AddressNote' | 'ValueNote'> {
    return {
      AddressNote: {
          id: new NoteSelector(2232136525),
        },
ValueNote: {
          id: new NoteSelector(1038582377),
        }
    } as ContractNotes<'AddressNote' | 'ValueNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(_admin: struct) */
    constructor: ((_admin: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_admin_public() */
    get_admin_public: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_passport_address() */
    get_passport_address: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** is_admin() */
    is_admin: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_dispatch(selector: field) */
    public_dispatch: ((selector: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_admin(new_admin: struct) */
    set_admin: ((new_admin: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_passport_address(_passport_address: struct) */
    set_passport_address: ((_passport_address: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** verify(address: struct, header_array: array, header_length: integer, pubkey_modulus: array, pubkey_redc: array, signature: array, from_header_sequence_index: integer, from_header_sequence_length: integer, from_address_sequence_index: integer, from_address_sequence_length: integer, to_header_sequence_index: integer, to_header_sequence_length: integer, to_address_sequence_index: integer, to_address_sequence_length: integer, email_array: array) */
    verify: ((address: AztecAddressLike, header_array: (bigint | number)[], header_length: (bigint | number), pubkey_modulus: FieldLike[], pubkey_redc: FieldLike[], signature: FieldLike[], from_header_sequence_index: (bigint | number), from_header_sequence_length: (bigint | number), from_address_sequence_index: (bigint | number), from_address_sequence_length: (bigint | number), to_header_sequence_index: (bigint | number), to_header_sequence_length: (bigint | number), to_address_sequence_index: (bigint | number), to_address_sequence_length: (bigint | number), email_array: (bigint | number)[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}