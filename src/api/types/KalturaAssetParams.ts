
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaMediaParserType } from './KalturaMediaParserType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetParamsArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	name? : string;
	systemName? : string;
	description? : string;
	tags? : string;
	requiredPermissions? : KalturaString[];
	sourceRemoteStorageProfileId? : number;
	remoteStorageProfileIds? : number;
	mediaParserType? : KalturaMediaParserType;
	sourceAssetParamsIds? : string;
}


export class KalturaAssetParams extends KalturaObjectBase {

    readonly id : number;
	partnerId : number;
	name : string;
	systemName : string;
	description : string;
	readonly createdAt : Date;
	readonly isSystemDefault : KalturaNullableBoolean;
	tags : string;
	requiredPermissions : KalturaString[];
	sourceRemoteStorageProfileId : number;
	remoteStorageProfileIds : number;
	mediaParserType : KalturaMediaParserType;
	sourceAssetParamsIds : string;

    constructor(data? : KalturaAssetParamsArgs)
    {
        super(data);
        if (typeof this.requiredPermissions === 'undefined') this.requiredPermissions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetParams' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				isSystemDefault : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				tags : { type : 's' },
				requiredPermissions : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				sourceRemoteStorageProfileId : { type : 'n' },
				remoteStorageProfileIds : { type : 'n' },
				mediaParserType : { type : 'es', subTypeConstructor : KalturaMediaParserType, subType : 'KalturaMediaParserType' },
				sourceAssetParamsIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetParams',KalturaAssetParams);
