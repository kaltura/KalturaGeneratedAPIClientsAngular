
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCEErrorArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	browser? : string;
	serverIp? : string;
	serverOs? : string;
	phpVersion? : string;
	ceAdminEmail? : string;
	type? : string;
	description? : string;
	data? : string;
}


export class KalturaCEError extends KalturaObjectBase {

    readonly id : string;
	partnerId : number;
	browser : string;
	serverIp : string;
	serverOs : string;
	phpVersion : string;
	ceAdminEmail : string;
	type : string;
	description : string;
	data : string;

    constructor(data? : KalturaCEErrorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCEError' },
				id : { type : 's', readOnly : true },
				partnerId : { type : 'n' },
				browser : { type : 's' },
				serverIp : { type : 's' },
				serverOs : { type : 's' },
				phpVersion : { type : 's' },
				ceAdminEmail : { type : 's' },
				type : { type : 's' },
				description : { type : 's' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCEError',KalturaCEError);
