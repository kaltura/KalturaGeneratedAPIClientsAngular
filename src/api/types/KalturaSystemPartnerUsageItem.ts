
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSystemPartnerUsageItemArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	partnerName? : string;
	partnerStatus? : KalturaPartnerStatus;
	partnerPackage? : number;
	partnerCreatedAt? : number;
	views? : number;
	plays? : number;
	entriesCount? : number;
	totalEntriesCount? : number;
	videoEntriesCount? : number;
	imageEntriesCount? : number;
	audioEntriesCount? : number;
	mixEntriesCount? : number;
	bandwidth? : number;
	totalStorage? : number;
	storage? : number;
	peakStorage? : number;
	avgStorage? : number;
	combinedBandwidthStorage? : number;
	deletedStorage? : number;
	transcodingUsage? : number;
}


export class KalturaSystemPartnerUsageItem extends KalturaObjectBase {

    partnerId : number;
	partnerName : string;
	partnerStatus : KalturaPartnerStatus;
	partnerPackage : number;
	partnerCreatedAt : number;
	views : number;
	plays : number;
	entriesCount : number;
	totalEntriesCount : number;
	videoEntriesCount : number;
	imageEntriesCount : number;
	audioEntriesCount : number;
	mixEntriesCount : number;
	bandwidth : number;
	totalStorage : number;
	storage : number;
	peakStorage : number;
	avgStorage : number;
	combinedBandwidthStorage : number;
	deletedStorage : number;
	transcodingUsage : number;

    constructor(data? : KalturaSystemPartnerUsageItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSystemPartnerUsageItem' },
				partnerId : { type : 'n' },
				partnerName : { type : 's' },
				partnerStatus : { type : 'en', subTypeConstructor : KalturaPartnerStatus, subType : 'KalturaPartnerStatus' },
				partnerPackage : { type : 'n' },
				partnerCreatedAt : { type : 'n' },
				views : { type : 'n' },
				plays : { type : 'n' },
				entriesCount : { type : 'n' },
				totalEntriesCount : { type : 'n' },
				videoEntriesCount : { type : 'n' },
				imageEntriesCount : { type : 'n' },
				audioEntriesCount : { type : 'n' },
				mixEntriesCount : { type : 'n' },
				bandwidth : { type : 'n' },
				totalStorage : { type : 'n' },
				storage : { type : 'n' },
				peakStorage : { type : 'n' },
				avgStorage : { type : 'n' },
				combinedBandwidthStorage : { type : 'n' },
				deletedStorage : { type : 'n' },
				transcodingUsage : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSystemPartnerUsageItem',KalturaSystemPartnerUsageItem);
