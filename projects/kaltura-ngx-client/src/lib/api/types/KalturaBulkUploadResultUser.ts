
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultUserArgs  extends KalturaBulkUploadResultArgs {
    userId? : string;
	screenName? : string;
	email? : string;
	description? : string;
	tags? : string;
	dateOfBirth? : number;
	country? : string;
	state? : string;
	city? : string;
	zip? : string;
	gender? : number;
	firstName? : string;
	lastName? : string;
	group? : string;
	externalId? : string;
}


export class KalturaBulkUploadResultUser extends KalturaBulkUploadResult {

    userId : string;
	screenName : string;
	email : string;
	description : string;
	tags : string;
	dateOfBirth : number;
	country : string;
	state : string;
	city : string;
	zip : string;
	gender : number;
	firstName : string;
	lastName : string;
	group : string;
	externalId : string;

    constructor(data? : KalturaBulkUploadResultUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultUser' },
				userId : { type : 's' },
				screenName : { type : 's' },
				email : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				dateOfBirth : { type : 'n' },
				country : { type : 's' },
				state : { type : 's' },
				city : { type : 's' },
				zip : { type : 's' },
				gender : { type : 'n' },
				firstName : { type : 's' },
				lastName : { type : 's' },
				group : { type : 's' },
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadResultUser'] = KalturaBulkUploadResultUser;