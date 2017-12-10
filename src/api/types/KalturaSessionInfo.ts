
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSessionInfoArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSessionInfo extends KalturaObjectBase {

    readonly ks : string;
	readonly sessionType : KalturaSessionType;
	readonly partnerId : number;
	readonly userId : string;
	readonly expiry : number;
	readonly privileges : string;

    constructor(data? : KalturaSessionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionInfo' },
				ks : { type : 's', readOnly : true },
				sessionType : { type : 'en', readOnly : true, subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				partnerId : { type : 'n', readOnly : true },
				userId : { type : 's', readOnly : true },
				expiry : { type : 'n', readOnly : true },
				privileges : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionInfo',KalturaSessionInfo);
