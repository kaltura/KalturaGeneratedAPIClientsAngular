
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileForensicWatermarkArgs  extends KalturaDeliveryProfileArgs {
    internalUrl? : KalturaKeyValue[];
	encryptionKey? : string;
	encryptionIv? : string;
	encryptionRegex? : string;
}


export class KalturaDeliveryProfileForensicWatermark extends KalturaDeliveryProfile {

    internalUrl : KalturaKeyValue[];
	encryptionKey : string;
	encryptionIv : string;
	encryptionRegex : string;

    constructor(data? : KalturaDeliveryProfileForensicWatermarkArgs)
    {
        super(data);
        if (typeof this.internalUrl === 'undefined') this.internalUrl = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileForensicWatermark' },
				internalUrl : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				encryptionKey : { type : 's' },
				encryptionIv : { type : 's' },
				encryptionRegex : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileForensicWatermark',KalturaDeliveryProfileForensicWatermark);
