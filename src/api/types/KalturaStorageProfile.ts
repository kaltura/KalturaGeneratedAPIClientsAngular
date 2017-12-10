
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaStorageProfileProtocol } from './KalturaStorageProfileProtocol';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaStorageProfileDeliveryStatus } from './KalturaStorageProfileDeliveryStatus';
import { KalturaStorageProfileReadyBehavior } from './KalturaStorageProfileReadyBehavior';
import { KalturaRule } from './KalturaRule';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStorageProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	desciption? : string;
	status? : KalturaStorageProfileStatus;
	protocol? : KalturaStorageProfileProtocol;
	storageUrl? : string;
	storageBaseDir? : string;
	storageUsername? : string;
	storagePassword? : string;
	storageFtpPassiveMode? : boolean;
	minFileSize? : number;
	maxFileSize? : number;
	flavorParamsIds? : string;
	maxConcurrentConnections? : number;
	pathManagerClass? : string;
	pathManagerParams? : KalturaKeyValue[];
	trigger? : number;
	deliveryPriority? : number;
	deliveryStatus? : KalturaStorageProfileDeliveryStatus;
	readyBehavior? : KalturaStorageProfileReadyBehavior;
	allowAutoDelete? : number;
	createFileLink? : boolean;
	rules? : KalturaRule[];
	deliveryProfileIds? : KalturaKeyValue[];
	privateKey? : string;
	publicKey? : string;
	passPhrase? : string;
	shouldExportThumbs? : boolean;
}


export class KalturaStorageProfile extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly partnerId : number;
	name : string;
	systemName : string;
	desciption : string;
	status : KalturaStorageProfileStatus;
	protocol : KalturaStorageProfileProtocol;
	storageUrl : string;
	storageBaseDir : string;
	storageUsername : string;
	storagePassword : string;
	storageFtpPassiveMode : boolean;
	minFileSize : number;
	maxFileSize : number;
	flavorParamsIds : string;
	maxConcurrentConnections : number;
	pathManagerClass : string;
	pathManagerParams : KalturaKeyValue[];
	trigger : number;
	deliveryPriority : number;
	deliveryStatus : KalturaStorageProfileDeliveryStatus;
	readyBehavior : KalturaStorageProfileReadyBehavior;
	allowAutoDelete : number;
	createFileLink : boolean;
	rules : KalturaRule[];
	deliveryProfileIds : KalturaKeyValue[];
	privateKey : string;
	publicKey : string;
	passPhrase : string;
	shouldExportThumbs : boolean;

    constructor(data? : KalturaStorageProfileArgs)
    {
        super(data);
        if (typeof this.pathManagerParams === 'undefined') this.pathManagerParams = [];
		if (typeof this.rules === 'undefined') this.rules = [];
		if (typeof this.deliveryProfileIds === 'undefined') this.deliveryProfileIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageProfile' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				desciption : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaStorageProfileStatus, subType : 'KalturaStorageProfileStatus' },
				protocol : { type : 'es', subTypeConstructor : KalturaStorageProfileProtocol, subType : 'KalturaStorageProfileProtocol' },
				storageUrl : { type : 's' },
				storageBaseDir : { type : 's' },
				storageUsername : { type : 's' },
				storagePassword : { type : 's' },
				storageFtpPassiveMode : { type : 'b' },
				minFileSize : { type : 'n' },
				maxFileSize : { type : 'n' },
				flavorParamsIds : { type : 's' },
				maxConcurrentConnections : { type : 'n' },
				pathManagerClass : { type : 's' },
				pathManagerParams : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				trigger : { type : 'n' },
				deliveryPriority : { type : 'n' },
				deliveryStatus : { type : 'en', subTypeConstructor : KalturaStorageProfileDeliveryStatus, subType : 'KalturaStorageProfileDeliveryStatus' },
				readyBehavior : { type : 'en', subTypeConstructor : KalturaStorageProfileReadyBehavior, subType : 'KalturaStorageProfileReadyBehavior' },
				allowAutoDelete : { type : 'n' },
				createFileLink : { type : 'b' },
				rules : { type : 'a', subTypeConstructor : KalturaRule, subType : 'KalturaRule' },
				deliveryProfileIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				privateKey : { type : 's' },
				publicKey : { type : 's' },
				passPhrase : { type : 's' },
				shouldExportThumbs : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageProfile',KalturaStorageProfile);
