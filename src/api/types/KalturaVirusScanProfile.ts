
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaVirusFoundAction } from './KalturaVirusFoundAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVirusScanProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	status? : KalturaVirusScanProfileStatus;
	engineType? : KalturaVirusScanEngineType;
	entryFilter? : KalturaBaseEntryFilter;
	actionIfInfected? : KalturaVirusFoundAction;
}


export class KalturaVirusScanProfile extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly partnerId : number;
	name : string;
	status : KalturaVirusScanProfileStatus;
	engineType : KalturaVirusScanEngineType;
	entryFilter : KalturaBaseEntryFilter;
	actionIfInfected : KalturaVirusFoundAction;

    constructor(data? : KalturaVirusScanProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirusScanProfile' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaVirusScanProfileStatus, subType : 'KalturaVirusScanProfileStatus' },
				engineType : { type : 'es', subTypeConstructor : KalturaVirusScanEngineType, subType : 'KalturaVirusScanEngineType' },
				entryFilter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' },
				actionIfInfected : { type : 'en', subTypeConstructor : KalturaVirusFoundAction, subType : 'KalturaVirusFoundAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirusScanProfile',KalturaVirusScanProfile);
