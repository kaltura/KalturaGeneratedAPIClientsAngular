
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRule } from './KalturaRule';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAccessControlProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	isDefault? : KalturaNullableBoolean;
	rules? : KalturaRule[];
}


export class KalturaAccessControlProfile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	name : string;
	systemName : string;
	description : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	isDefault : KalturaNullableBoolean;
	rules : KalturaRule[];

    constructor(data? : KalturaAccessControlProfileArgs)
    {
        super(data);
        if (typeof this.rules === 'undefined') this.rules = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlProfile' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				isDefault : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				rules : { type : 'a', subTypeConstructor : KalturaRule, subType : 'KalturaRule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlProfile',KalturaAccessControlProfile);
