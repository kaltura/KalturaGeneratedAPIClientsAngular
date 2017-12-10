
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultCategoryArgs  extends KalturaBulkUploadResultArgs {
    relativePath? : string;
	name? : string;
	referenceId? : string;
	description? : string;
	tags? : string;
	appearInList? : number;
	privacy? : number;
	inheritanceType? : number;
	userJoinPolicy? : number;
	defaultPermissionLevel? : number;
	owner? : string;
	contributionPolicy? : number;
	partnerSortValue? : number;
	moderation? : boolean;
}


export class KalturaBulkUploadResultCategory extends KalturaBulkUploadResult {

    relativePath : string;
	name : string;
	referenceId : string;
	description : string;
	tags : string;
	appearInList : number;
	privacy : number;
	inheritanceType : number;
	userJoinPolicy : number;
	defaultPermissionLevel : number;
	owner : string;
	contributionPolicy : number;
	partnerSortValue : number;
	moderation : boolean;

    constructor(data? : KalturaBulkUploadResultCategoryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultCategory' },
				relativePath : { type : 's' },
				name : { type : 's' },
				referenceId : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				appearInList : { type : 'n' },
				privacy : { type : 'n' },
				inheritanceType : { type : 'n' },
				userJoinPolicy : { type : 'n' },
				defaultPermissionLevel : { type : 'n' },
				owner : { type : 's' },
				contributionPolicy : { type : 'n' },
				partnerSortValue : { type : 'n' },
				moderation : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultCategory',KalturaBulkUploadResultCategory);
