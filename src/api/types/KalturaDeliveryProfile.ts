
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileType } from './KalturaDeliveryProfileType';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaDeliveryStatus } from './KalturaDeliveryStatus';
import { KalturaUrlRecognizer } from './KalturaUrlRecognizer';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDeliveryProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	type? : KalturaDeliveryProfileType;
	systemName? : string;
	description? : string;
	streamerType? : KalturaPlaybackProtocol;
	url? : string;
	status? : KalturaDeliveryStatus;
	recognizer? : KalturaUrlRecognizer;
	tokenizer? : KalturaUrlTokenizer;
	mediaProtocols? : string;
	priority? : number;
	extraParams? : string;
	supplementaryAssetsFilter? : KalturaAssetFilter;
}


export class KalturaDeliveryProfile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	name : string;
	type : KalturaDeliveryProfileType;
	systemName : string;
	description : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	streamerType : KalturaPlaybackProtocol;
	url : string;
	readonly hostName : string;
	status : KalturaDeliveryStatus;
	recognizer : KalturaUrlRecognizer;
	tokenizer : KalturaUrlTokenizer;
	readonly isDefault : KalturaNullableBoolean;
	readonly parentId : number;
	mediaProtocols : string;
	priority : number;
	extraParams : string;
	supplementaryAssetsFilter : KalturaAssetFilter;

    constructor(data? : KalturaDeliveryProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfile' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaDeliveryProfileType, subType : 'KalturaDeliveryProfileType' },
				systemName : { type : 's' },
				description : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				streamerType : { type : 'es', subTypeConstructor : KalturaPlaybackProtocol, subType : 'KalturaPlaybackProtocol' },
				url : { type : 's' },
				hostName : { type : 's', readOnly : true },
				status : { type : 'en', subTypeConstructor : KalturaDeliveryStatus, subType : 'KalturaDeliveryStatus' },
				recognizer : { type : 'o', subTypeConstructor : KalturaUrlRecognizer, subType : 'KalturaUrlRecognizer' },
				tokenizer : { type : 'o', subTypeConstructor : KalturaUrlTokenizer, subType : 'KalturaUrlTokenizer' },
				isDefault : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				parentId : { type : 'n', readOnly : true },
				mediaProtocols : { type : 's' },
				priority : { type : 'n' },
				extraParams : { type : 's' },
				supplementaryAssetsFilter : { type : 'o', subTypeConstructor : KalturaAssetFilter, subType : 'KalturaAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfile',KalturaDeliveryProfile);
